import config from "../config/index.js";

export const getGifs = async (category) => {
  const uri = "https://api.giphy.com/v1/gifs";
  const param = `search?q=${encodeURI(category)}&limit=10&api_key=`;
  const url = `${uri}/${param}${config.apikey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
