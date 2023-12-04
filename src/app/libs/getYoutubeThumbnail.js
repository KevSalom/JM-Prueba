function getYoutubeThumbnailUrl(youtubeUrl) {
  // Use regex to extract the YouTube video ID from the URL
  const videoIdMatch = youtubeUrl.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );

  if (videoIdMatch && videoIdMatch[1]) {
    const videoId = videoIdMatch[1];

    // Construct the URL for the medium quality thumbnail using the video ID
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    return thumbnailUrl;
  } else {
    // Log an error if the video ID extraction fails
    console.error('Unable to extract video ID from YouTube URL.');
    return null;
  }
}

export default getYoutubeThumbnailUrl;