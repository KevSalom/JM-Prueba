function formatDate(dateString) {
  // Create a new Date object from the provided date string
  const date = new Date(dateString);

  // Extract day, month, and year components and pad them with leading zeros if necessary
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const year = date.getFullYear();

  // Return the formatted date string
  return `${day}/${month}/${year}`;
}

export default formatDate;