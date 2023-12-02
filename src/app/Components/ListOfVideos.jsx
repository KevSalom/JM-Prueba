"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../redux/actions";

const ListOfVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.allVideos);

  useEffect(() => {
    dispatch(fetchVideos());
  },[]);

  return <div>Hola, hay {videos.length} videos en el estado de Redux.</div>;
};

export default ListOfVideos;
