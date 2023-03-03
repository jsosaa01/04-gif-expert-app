export const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=z31uGjOj3vscT184srT2aJojyh3nD9xx&limit=5&q=${ category }`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map ( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_still.url,
    }));

    console.log(gifs);

    return (gifs );
}