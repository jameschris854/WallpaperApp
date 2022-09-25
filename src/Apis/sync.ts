import config from "../Config/config"


const httpGet = async (url: RequestInfo) => {
    const reqConfig = {
        headers:{
            Authorization:config.PIXEL_API_KEY
        }
    }

    const blob = await fetch(url,reqConfig)
    return await blob.json()
}

const wallPaperResWrapper = async (res) => {
    const raw = await res

    const RESULT_LIST = 'photos'
    const URLS = 'src'

    const results = raw[RESULT_LIST].map((image) => {
        return(
            {
                id:image.id,
                description:image.description,
                links: {download:image[URLS].original},
                urls:  { 
                    raw: image[URLS].original,
                    regular: image[URLS].medium,
                    small:image[URLS].medium,
                    thumb:image[URLS].medium
                }
            }
        )
    })

    const formattedRes = {
        results:results,
        total: res.total_results,
        total_pages: res.total_results
    }

    return formattedRes
}

class Sync {

    static getWallPapers = (page=1) => {
        return wallPaperResWrapper(httpGet(`${config.WALLPAPER_API_URL}/search?query=4k&per_page=${10}&page=${page}`))
    }


    static getSearchRes = (search: string,page=1) => {
        
        return wallPaperResWrapper(httpGet(`${config.WALLPAPER_API_URL}/search?query=${search}&per_page=${10}&page=${page}`))
    }

    static getCategoryList = () => {
        return httpGet(`${config.WALLPAPER_API_URL}/topics?client_id=${config.unSplashAccessKey}`)
    }

    static getByCatName = (cat:string,page=1) => {
        return wallPaperResWrapper(httpGet(`${config.WALLPAPER_API_URL}/search?query=${cat}&per_page=${10}&page=${page}`))
    }

}


export default Sync