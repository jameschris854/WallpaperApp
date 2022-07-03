import config from "../Config/config"


const httpGet = async (url: RequestInfo) => {
    return fetch(url)
}

const getWallPapers = () => {
    return httpGet(`https://api.unsplash.com/search/photos?query=car&client_id=${config.unSplashAccessKey}`)
}

export {getWallPapers}