function filterVideosByCurrentDay(arrayOfObjects) {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    return arrayOfObjects.filter((obj) => {
      const objDate = new Date(obj.date);
      const objDay = objDate.getDate();
      const objMonth = objDate.getMonth();
      const objYear = objDate.getFullYear();
  
      return objDay === currentDay && objMonth === currentMonth && objYear === currentYear;
    });
  }

  export default filterVideosByCurrentDay