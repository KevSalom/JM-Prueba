'use client'
import { use, useEffect } from "react";
import FormComponent from "@/app/Components/FormVideo";
import useGetVideo from "@/app/CustomHooks/useGetVideo";
import { useParams } from "next/navigation";
import Spinner from "@/app/Components/Spinner";
import useUpdateVideo from "@/app/CustomHooks/useUpdateVideo";


const EditVideo = () => {

  const {errorGetVideo, getVideo, video} = useGetVideo();
  const {error, loading, updateVideo} = useUpdateVideo()
  const params = useParams()

  useEffect(()=>{
    getVideo(params.id)
  },[])


  return (
    <div className=" w-full h-screen max-w-xl mx-auto my-8 md:my-10 ">
     <h1 className="text-3xl md:text-4xl  text-center text-gray-600">
        Actualizar Video
      </h1>
      {/* If the video does not exist, display an error message */}
      {errorGetVideo && <p>No hay videos cone ste ID</p>}

      {!video && <div className=" h-32 mt-28 mx-auto flex justify-center items-center"><Spinner/></div> }
      {/* If the video exists, display the form with the video's default values */}
      {video && (
        <FormComponent
          defaultValues={{
            title: video.title,
            description: video.description,
            url: video.url,
          }}
          onSubmit={updateVideo}  loading={loading} error={error}
        
        />
      )}
    </div>
  );
};


export default EditVideo;
