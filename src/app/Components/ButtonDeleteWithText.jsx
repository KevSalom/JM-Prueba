"use client";
import SpinerShort from "./SpinerShort";
import useDeleteVideo from "../CustomHooks/useDeleteVideo";
const ButtonDeleteWithText= ({ id }) => {
  const { loading, deleteVideo } = useDeleteVideo();

  return (
    <button  className='bg-gray-300 text-gray-700 px-2 py-1 rounded mr-2 w-[67px]' onClick={() => deleteVideo(id)}>
      {!loading ? <SpinerShort /> : 'Eliminar'}
    </button>
  );
};

export default ButtonDeleteWithText;
