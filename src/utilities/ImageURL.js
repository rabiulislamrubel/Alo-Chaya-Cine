

function getImgURL(name) {
    return new URL(`../assets/movie-covers/${name}`, import.meta.url).href
}

export { getImgURL };