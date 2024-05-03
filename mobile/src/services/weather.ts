//TODO: pegar latitude e longitude do aparelho
//TODO: procurar uma API pra consultar o clima

export async function getWeather(lat: string, lon: string) {
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=4bea1d34df77d10bff46e49d5bc0e036`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return `❌ ERROR: ${error}`;
    });

  return response;
}
