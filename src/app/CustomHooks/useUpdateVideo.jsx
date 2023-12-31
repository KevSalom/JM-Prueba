"use client";
import { useState } from "react";
import axios from "axios";
import convertToEmbeddedURL from "../libs/embedUrlYoutube";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../redux/actions";
import getYoutubeThumbnailUrl from "../libs/getYoutubeThumbnail";

const useUpdateVideo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()

  const updateVideo = async (videoId, updatedVideoData) => {
    try {
      setLoading(true);
      const { title, description, url } = updatedVideoData;
      const dataForUpdate = {
        title,
        description,
        url: convertToEmbeddedURL(url),
        thumbnail: getYoutubeThumbnailUrl(url)
      };
      await axios.put(`/api/videos/${videoId}`, dataForUpdate);
      dispatch(fetchVideos());
      return
    } catch (error) {
      console.error("Error al actualizar el video:", error);
      setError("Error al actualizar el video. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return {
    updateVideo,
    loading,
    error,
  };
};

export default useUpdateVideo;
