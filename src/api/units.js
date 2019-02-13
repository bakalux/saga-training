
const API_URL = 'https://age-of-empires-2-api.herokuapp.com/api/';

export async function fetchUnits() {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/list')
  const cryptos = await response.json();
  console.log(cryptos);
  return cryptos;
}
