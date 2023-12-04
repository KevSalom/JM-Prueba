import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../redux/actions';
import pagination from '../libs/pagination';
import sortVideosByDate from '../libs/sortVideos';

const useVideoPagination = (productosPorPagina) => {
  const dispatch = useDispatch();
  const allVideos = useSelector((state) => state.allVideos);
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const [currentOrder, setCurrentOrder] = useState('desc')

  useEffect(() => {
    if (allVideos.length === 0) {
      dispatch(fetchVideos())
        .then(() => setLoading(false))
        .catch((error) => {
          console.error('Error fetching videos:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [dispatch, allVideos]);

  const { productosPagina, totalPaginas } = pagination({
    productos: sortVideosByDate(allVideos, currentOrder),
    paginaActual,
    productosPorPagina,
  });

  const nextPage = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (paginaActual > 1) {
      setPaginaActual((prev) => prev - 1);
    }
  };

  const handleOrderChange = (newOrder) => {
    if (newOrder !== currentOrder) {
      setCurrentOrder(newOrder)
      setPaginaActual(1);
    }
  };

  return {
    totalPaginas,
    nextPage,
    prevPage,
    productosPagina,
    handleOrderChange,
    loading,
    paginaActual
  };
};

export default useVideoPagination;