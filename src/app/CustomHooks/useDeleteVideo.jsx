"use client";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../redux/actions";

const useDeleteVideo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const deleteVideo = async (videoId) => {
    try {
      setLoading(true);
      await axios.delete(`/api/videos/${videoId}`);
      dispatch(fetchVideos());
      return;
    } catch (error) {
      console.error("Error al eliminar el video:", error);
      setError("Error al eliminar el video. Por favor, inténtalo de nuevo.");
      setLoading(false);
    } 
  };

  return {
    deleteVideo,
    loading,
    error,
  };
};

export default useDeleteVideo;
