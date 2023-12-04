import Image from "next/image";
import Link from "next/link";
import ButtonDeleteWithText from "./ButtonDeleteWithText";
import formatDate from "../libs/formatDate";

const ManageTable = ({videos}) => {

  return (
    <table className=" w-[90%] mx-auto max-w-lg border-transparent rounded-xl bg-gray-50 overflow-hidden shadow-sm">
      <thead>
        <tr>
          <th className="border border-gray-100 whitespace-nowrap text-sm p-2 font-medium">
            Video
          </th>
          <th className="border  border-gray-100 whitespace-nowrap text-sm p-2 font-medium">
            Rutina
          </th>
          <th className="border border-gray-100 whitespace-nowrap text-sm p-2 font-medium">
            Fecha
          </th>
          <th className="border  border-gray-100 whitespace-nowrap text-sm p-2 font-medium">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {videos.map((video) => (
          <tr key={video.id}>
            <td className="border  border-gray-100 whitespace-nowrap text-sm p-2">
              <Image
              height={56}
              width={100}
                src={video.thumbnail}
                alt={video.title}
                className="max-w-[100px] rounded-md "
              />
            </td>
            <td className="border  border-gray-100 whitespace-nowrap text-sm p-2 text-gray-500">
              {video.title}
            </td>
            <td className="border  border-gray-100 whitespace-nowrap text-sm p-2 text-gray-500">
              {formatDate(video.date)}
            </td>
            <td className="border  border-gray-100 whitespace-nowrap text-sm p-2 text-gray-500">
              <Link href={`edit/${video.id}`} className="bg-gray-600 text-white px-2 py-1 rounded mr-2">
                Editar
              </Link>
           <ButtonDeleteWithText id={video.id} />
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageTable;
