import "../../app/globals.css";
import { BsPencilSquare } from "react-icons/bs";
import Link from "next/link";
import ButtonDeleteVideo from "./ButtonDeleteVideo";
import Image from "next/image";

const VideoCard = ({ video }) => {
  return (
    <div className="card max-w-[350px] bg-gray-50 rounded-md shadow-md overflow-hidden ">
      {/* Video */}
      <Image
        src={video.thumbnail}
        width={350} height={192} 
        alt={video.title}
      ></Image>

      {/* Info video section */}
      <section className="p-4 h-48 flex flex-col justify-between gap-2">
        <div>
          <h3 className="text-base font-[400] mb-2 text-gray-950">
            {video.title}{" "}
          </h3>
          <p className="text-sm font-[400] text-gray-400">
            {video.description}
          </p>
        </div>
        <div className="flex justify-between">
          <ButtonDeleteVideo id={video.id} />
          <Link href={`/edit/${video.id}`}>
            <BsPencilSquare className="fill-gray-500 text-xl" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VideoCard;
