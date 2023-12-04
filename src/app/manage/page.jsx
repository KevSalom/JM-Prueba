'use client'
import ManageTable from '../Components/ManageTable'
import useVideoPagination from "../CustomHooks/useManageVideos";
import Pagination from '../Components/Pagination';
import TableNav from '../Components/TableNav';

const ManageVideos = () => {

  const {
    totalPaginas,
    nextPage,
    prevPage,
    productosPagina,
    handleOrderChange,
    loading,
    paginaActual
  } = useVideoPagination(5);

  return (
    <div className='w-[90%] max-w-screen-2xl mx-auto my-8 md:my-10'>
      <h1 className="text-3xl md:text-4xl  text-center text-gray-600">
        Gestionar Videos
      </h1>
      <div className='max-w-2xl mx-auto'>
      <TableNav handleChange={handleOrderChange} />
      </div>
      <div className='w-full overflow-x-scroll md:overflow-hidden'>
       
      <ManageTable videos={productosPagina  } />
      </div>
      <div className='mt-2'><Pagination  totalPaginas={totalPaginas} 
    nextPage={nextPage} prevPage={prevPage}
    paginaActual={paginaActual} /></div>
    </div>
  )
}

export default ManageVideos
