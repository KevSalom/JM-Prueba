"use client";
import useStadistics from "../CustomHooks/useStadistics";
import SpinerShort from "./SpinerShort";

const Stadistics = () => {
  const { loading, newVideos, totalVideos } = useStadistics();

  return (
    <section className="flex justify-center items-center gap-2 mt-1">
        <div className=" h-6 text-xs flex justify-center items-center gap-1 bg-gray-50 px-2 rounded-md text-gray-500">
        <span className="text-sm flex justify-center items-center font-semibold">
          {loading ? <SpinerShort /> : totalVideos}{" "}
        </span>
        Rutinas
      </div>
      <div className=" h-6 text-xs flex justify-center items-center gap-1 bg-gray-50 px-2 rounded-md text-gray-500">
        <span className="text-sm flex justify-center items-center font-semibold">
          {loading ? <SpinerShort /> : `+${newVideos}`}{" "}
        </span>
        Nuevas
      </div>
    </section>
  );
};

export default Stadistics;
