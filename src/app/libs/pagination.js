const pagination = ({ productos, paginaActual, productosPorPagina }) => {
    // Calculate the total number of pages based on the given number of products per page.
    let totalPaginas = Math.ceil(productos.length / productosPorPagina);
  
    // Calculate the start and end indices for the current page.
    let inicio = (paginaActual - 1) * productosPorPagina;
    let fin = inicio + productosPorPagina;
  
    // Extract the products for the current page.
    let productosPagina = productos.slice(inicio, fin);
  
    // Return an object containing the products for the current page and the total number of pages.
    return { productosPagina, totalPaginas };
  };
  
  export default pagination;