export const formatDate = (timestamp: string): string => {
  const date = new Date(parseInt(timestamp));
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
};

export async function getProductsData() {
  return await fetch(
    `${process.env.DOMAIN}/api/products`, 
    { 
      headers: {
        Accept: "application/json",
        method: "GET"
      }
    }
  ).then(res => res.json());
}

export async function getProductDataById(id: string) {
  return await fetch(
    `${process.env.DOMAIN}/api/products/${id}`, 
    { 
      headers: {
        Accept: "application/json",
        method: "GET"
      }
    }
  ).then(res => res.json());
}