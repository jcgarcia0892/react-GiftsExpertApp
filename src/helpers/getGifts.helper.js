export const getGifts = async (category) => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=H6ioqdfu5pXHoWDPQQTTeuisTTABTu31`
  );
  const data = await resp.json();

  const gifts = data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    img: gif.images.downsized_medium.url,
  }));
  return gifts;
};
