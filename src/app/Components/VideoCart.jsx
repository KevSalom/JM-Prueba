import "../../app/globals.css";
import { BsXCircle, BsPencilSquare } from "react-icons/bs";


const VideoCard = ({ video }) => {
  return (
    <div className="card max-w-[350px] bg-gray-50 rounded-md shadow-md overflow-hidden ">

      {/* Video */}
      <iframe
        src={video?.url}
        allowFullScreen={true}
        className=" w-full h-48"
      ></iframe>

      {/* Info video section */}
      <section className="p-4 h-48 flex flex-col justify-between gap-2">
        <div>
          <h3 className="text-base font-[400] mb-2 text-gray-950">
            {video?.title}{" "}
          </h3>
          <p className="text-sm font-[400] text-gray-400">
            {video?.description}
          </p>
        </div>
        <div className="flex justify-between">
          <button>
            <BsXCircle className="fill-red-400 text-xl" />{" "}
          </button>
          <button>
            <BsPencilSquare className="fill-gray-500 text-xl" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default VideoCard;
