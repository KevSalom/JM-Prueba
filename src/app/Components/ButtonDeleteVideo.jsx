"use client";
import useDeleteVideo from "../CustomHooks/useDeleteVideo";
import { BsXCircle } from "react-icons/bs";
import SpinerShort from "./SpinerShort";
const ButtonDeleteVideo = ({ id }) => {
  const { loading, deleteVideo } = useDeleteVideo();

  return (
    <button onClick={() => deleteVideo(id)}>
      {loading ? <SpinerShort /> : <BsXCircle className="fill-red-400 text-xl" />}
    </button>
  );
};

export default ButtonDeleteVideo;
