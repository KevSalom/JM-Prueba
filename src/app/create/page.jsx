"use client";
import FormComponent from "../Components/FormVideo";
import useCreateVideo from "../CustomHooks/useCreateVideo";

const CreateVideo = () => {
  const { createVideo, loading, error } = useCreateVideo();
  return (
    <div className=" w-[90%] h-screen max-w-xl mx-auto my-8 md:my-10 ">
      <h1 className="text-3xl md:text-4xl  text-center text-gray-600">
        Crear Nueva Rutina
      </h1>
      <FormComponent onSubmit={createVideo}  loading={loading} error={error} />
    </div>
  );
};

export default CreateVideo;
