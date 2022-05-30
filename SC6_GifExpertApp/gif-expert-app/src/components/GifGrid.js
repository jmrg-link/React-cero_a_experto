import React from 'react'
import config from '../../../../config/index.mjs'

export const GifGrid = ({category}) => {
    
    const getGifts = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=morty&limit=10&api_key=${config.apikey}`
        const resp = fetch(url)
        const data = await resp.json()
        console.log(data);

    }
  return (
    <>
        <h3>{ category }</h3>
    </>
  )
}
