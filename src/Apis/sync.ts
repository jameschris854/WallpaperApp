import config from "../Config/config"


const httpGet = async (url: RequestInfo) => {
    const blob = await fetch(url)
    return await blob.json()
}

class Sync {

    static getWallPapers = (page=1) => {
        return httpGet(`https://api.unsplash.com/search/photos?query=wallpapers&client_id=${config.unSplashAccessKey}&page=${page}`)
    }


    static getSearchRes = (search: string,page=1) => {
        return httpGet(`https://api.unsplash.com/search/photos?query=${search}&client_id=${config.unSplashAccessKey}&page=${page}`)
    }

    static getCategoryList = () => {
        return httpGet(`https://api.unsplash.com/topics?client_id=${config.unSplashAccessKey}`)
    }

    static getByCatName = (cat:string,page=1) => {
        return httpGet(`https://api.unsplash.com/search/photos?query=${cat}&client_id=${config.unSplashAccessKey}&page=${page}`)
    }

}


export default Sync