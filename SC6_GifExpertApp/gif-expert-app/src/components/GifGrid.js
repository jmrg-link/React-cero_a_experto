import React ,{ useState , useEffect } from 'react'
import config from '../config/index.js'
import { GifGridItem } from './GifGridItem.js'

export const GifGrid = ({category}) => {

  const [ images , setImages ] = useState([])

  
  useEffect( ()=>{
    getGifts()
  }, [])

    const getGifts = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=morty&limit=10&api_key=${config.apikey}`
        const resp = await fetch(url)
        const { data } = await resp.json()
        const gifs = data.map(img => {
          return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
          }
        })
        console.log(gifs);
        setImages(gifs)
    }
    //getGifts()
  return (
    <>
        <h3>{ category }</h3>
          {
            images.map( img => (
              <GifGridItem 
                key={img.id}
                { ...img }
              />
            ))
          }
    </>
  )
}
