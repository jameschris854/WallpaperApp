import config from "../Config/config"


const httpGet = async (url: RequestInfo) => {
    const blob = await fetch(url)
    return await blob.json()
}

class Sync {

    static getWallPapers = () => {
        return httpGet(`https://api.unsplash.com/search/photos?query=wallpapers&client_id=${config.unSplashAccessKey}`)
    }


    static getSearchRes = (search: string) => {
        return httpGet(`https://api.unsplash.com/search/photos?query=${search}&client_id=${config.unSplashAccessKey}`)
    }

    static getCategoryList = () => {
        return httpGet(`https://api.unsplash.com/topics?client_id=${config.unSplashAccessKey}`)
    }

}


export default Sync