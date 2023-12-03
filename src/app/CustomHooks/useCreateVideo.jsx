"use client";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../redux/actions";
import convertToEmbeddedURL from "../libs/embedUrlYoutube";
import getYoutubeThumbnailUrl from "../libs/getYoutubeThumbnail";

const useCreateVideo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const createVideo = async (videoData) => {
    setLoading(true);
    const { title, description, url } = videoData;
    const dataVideo = {
      title,
      description,
      url: convertToEmbeddedURL(url),
      thumbnail: getYoutubeThumbnailUrl(url)
    };
    console.log(dataVideo);
    try {
      await axios.post("/api/videos", dataVideo);
      dispatch(fetchVideos());
      return;
    } catch (error) {
      setError("Error al crear el video. Por favor, inténtalo de nuevo.");
      setTimeout(() => {
        setError(null);
      }, 5000);
      throw new Error();
    } finally {
      setLoading(false);
    }
  };

  return {
    createVideo,
    loading,
    error,
  };
};

export default useCreateVideo;
