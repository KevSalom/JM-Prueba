'use client'
import { UseSelector } from "react-redux/es/hooks/useSelector"
import { useState, useEffect } from "react";

const useStadistics = () => {

    const [loading, setLoading] = useState(true)
    const [totalVideos, setTotalVideos] = useState(null)

    const allVideos = useSelector((state) => state.allVideos);

    useEffect(()=>{
        if(allVideos.length !== 0){
            setTotalVideos(allVideos.length) 
            setLoading(false)
        }
    }, [allVideos])
      
  return {
    totalVideos, loading
  }
}

export default useStadistics
