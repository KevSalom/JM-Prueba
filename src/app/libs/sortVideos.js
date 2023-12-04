const sortVideosByDate = (videos, order = 'desc') => {

    // Validate the order parameter
    const validOrders = ['asc', 'desc'];
    if (!validOrders.includes(order)) {
      throw new Error("Invalid sorting order. Use 'asc' or 'desc'.");
    }
  
    // Sort the videos based on the 'date' property
    const sortedVideos = videos.sort((videoA, videoB) => {
      const dateA = new Date(videoA.date).getTime();
      const dateB = new Date(videoB.date).getTime();
  
      if (order === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  
    return sortedVideos;
  };
  
  export default sortVideosByDate;