import React ,{  } from 'react'
//import { GifGridItem } from './GifGridItem.js'
//import { getGifts } from '../helpers/GetGifs.js'

export const GifGrid = ({category}) => {

  //const [ images , setImages ] = useState([])
  //
  //useEffect( ()=>{
  //  getGifts( category )
  //    .then( setImages)
  //}, [category])
    
  return (
    <>
      <h3>{ category }</h3>
      {/* <div className='card-grid'>
          {
            images.map( img => (
              <GifGridItem 
                key={img.id}
                { ...img }
              />
            ))
          }
      </div> */}
    </>
  )
}
