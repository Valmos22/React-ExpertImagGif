

export const getGif = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=12&api_key=FViLzkRJ35V0C4xfqYgYedbDAsJCsNad`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // console.log(gifs);
    return gifs;
}