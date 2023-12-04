import Image from "next/image";
import Link from "next/link";
import ButtonDeleteWithText from "./ButtonDeleteWithText";

const ManageTable = ({videos}) => {

  // Creamos una función para formatear la fecha
  const formatearFecha = (fecha) => {
    // Usamos el objeto Date de JavaScript para crear una instancia de la fecha
    const date = new Date(fecha);
    // Retornamos la fecha formateada como dd/mm/yyyy
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // Retornamos el elemento JSX de la tabla
  return (
    <table className=" w-[90%] mx-auto max-w-lg border-transparent rounded-xl bg-gray-50 overflow-hidden shadow-sm">
      <thead>
        <tr>
          <th className="border border-gray-100 whitespace-nowrap text-sm p-2 font-medium">
            Imagen
          </th>
          <th className="border  border-gray-100 whitespace-nowrap text-sm p-2 font-medium">
            Título
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
              {formatearFecha(video.date)}
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
