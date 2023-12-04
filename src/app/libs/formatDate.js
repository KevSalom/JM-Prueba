function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Sumar 1 porque en JavaScript los meses van de 0 a 11
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export default formatDate