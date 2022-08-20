export default class Page {
    page : number = 1
    totalRecords : number = 0
    totalPages : number | undefined = undefined 

    setPage = (p : number) => this.page = p
    setTotalRecords = (r : number) => this.totalRecords = r
    setTotalPages = (t : number) => this.totalPages = t

}