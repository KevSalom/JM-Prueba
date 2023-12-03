function getYoutubeThumbnailUrl(youtubeUrl) {
    // Extraer el video ID de la URL
    const videoIdMatch = youtubeUrl.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
  
    if (videoIdMatch && videoIdMatch[1]) {
      const videoId = videoIdMatch[1];
      // Construir la URL del thumbnail
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      return thumbnailUrl;
    } else {
      console.error('No se pudo extraer el ID del video de la URL de YouTube.');
      return null;
    }
  }

  export default getYoutubeThumbnailUrl