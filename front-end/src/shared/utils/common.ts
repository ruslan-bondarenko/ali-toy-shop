export const formatDate = (timestamp: string): string => {
  const date = new Date(parseInt(timestamp));
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
};

export async function getProductsData() {
  return await fetch("http://localhost:3000/api/products").then(res => res.json());
}

export async function getProductDataById(id: string) {
  return await fetch(`http://localhost:3000/api/products/${id}`).then(res => res.json());
}