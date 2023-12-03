'use client'
import { useState } from 'react';
import axios from 'axios';

const useGetVideo = () => {
  const [video, setVideo] = useState('');
  const [errorGetVideo, setErrorGetVideo] = useState('');

  const getVideo = async (id) => {
    try {
      const {data} = await axios.get(`/api/videos/${id}`);
      setVideo(data)
    } catch (error) {
      setErrorGetVideo(true)
    }
  };

  return {
    video,
    getVideo,
    errorGetVideo
  };
};

export default useGetVideo;