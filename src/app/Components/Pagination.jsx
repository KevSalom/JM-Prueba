"use client";
import React from "react";

const Pagination = ({ totalPaginas, nextPage, prevPage, paginaActual }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-500">
        Mostrando
        <span className="font-semibold text-gray-700">{paginaActual} </span> de{" "}
        <span className="font-semibold text-gray-700 ">{totalPaginas}</span>{" "}
        Páginas
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-50 bg-gray-600 rounded-s hover:bg-gray-900"
          onClick={prevPage}
        >
          Anterior
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-50 bg-gray-600 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 "
          onClick={nextPage}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Pagination;
