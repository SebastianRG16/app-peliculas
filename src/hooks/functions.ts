export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export const roundNumber = (num: number, decimals = 1) => {
  return Number(num.toFixed(decimals));
};
