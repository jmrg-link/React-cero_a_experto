import config  from '../../config/index.mjs'

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {
        const apiKey = config.apikey;
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;
        //const img = document.createElement('img');
        //img.src = url;
        //document.body.append( img );
        return url
    } catch (err) {
        // manejo del error
        console.error(err)
        return 'not exists'
    }
    
    
    
}

 export default getImagen();



