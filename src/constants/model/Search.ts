import Sync from "../../Apis/sync";

export default class Search {

    searchText = ""
    result = []

    setSearchResults = (r) => this.result = r;

    getSearchResults = async (text: string) => {
        const res = await Sync.getSearchRes(text)
        this.setSearchResults(res.results)
    }

    setSearchText = async (text : string) => {
        this.searchText = text
        await this.getSearchResults(text)
    } 

}