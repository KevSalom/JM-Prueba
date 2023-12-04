function filterVideosByCurrentDay(arrayOfObjects) {
  // Get the current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Filter the array based on the current day
  return arrayOfObjects.filter((obj) => {
    // Extract the date information from each object
    const objDate = new Date(obj.date);
    const objDay = objDate.getDate();
    const objMonth = objDate.getMonth();
    const objYear = objDate.getFullYear();

    // Return true for objects created on the current day
    return objDay === currentDay && objMonth === currentMonth && objYear === currentYear;
  });
}

  export default filterVideosByCurrentDay