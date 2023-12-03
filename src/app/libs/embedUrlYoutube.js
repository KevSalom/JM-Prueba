const convertToEmbeddedURL = (youtubeURL) => {
  // Extract the video ID from the YouTube URL
  const videoID = youtubeURL.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

  if (videoID && videoID[1]) {
    // Construct the embedded URL
    const embeddedURL = `https://www.youtube.com/embed/${videoID[1]}`;
    return embeddedURL;
  } else {
    // Return the original URL if the video ID cannot be extracted
    return youtubeURL;
  }
};

export default convertToEmbeddedURL