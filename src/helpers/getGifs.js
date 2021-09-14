

 /**Recibir la categoria y hacer una peticion http */
 export const getGifs = async (category) => {

    //Peticion http
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=IZyJMttm1wkXRlrWtBs4qrZOcU1p5QiM`//Pagina GIPHY: search Endpoint
    const resp = await fetch( url ); //fetch hace la solicitud y recupera el recurso que envia la api
    const {data} = await resp.json(); //la resp viene en formato json

    //console.log(data); //la data trae mucha informacion que no necesito 

    //solo extraigo lo que quiero mutando el arreglo
    const gifs = data.map( img => {
        return { //retorno un objeto
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}