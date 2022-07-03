import CategorySvg from "./Assets/Svg/CategorySvg";
import HomeSvg from "./Assets/Svg/HomeSvg";
import SearchSvg from "./Assets/Svg/SearchSvg";
import Home from "./Screens/Home.Screen";

//https://www.svgrepo.com/svg/14071/search

export default class Constants {

    static BottomTabs = [
        {
            title:"Search",
            Icon: SearchSvg,
            value:"search",
            index:0,
            component:Home,
            color:'#622569',
            showHeader: true
        }, {
            title:"Home",
            Icon: HomeSvg,
            value:"home",
            index:1,
            component:Home,
            color:'#82b74b',
            showHeader: false
        },
        {
            title:"Categories",
            Icon: CategorySvg,
            value:"categories",
            index:2,
            component:Home,
            color:'#ff6f69',
            showHeader: true
        }
    ]

    static AppHeader = {
        height:50
    }

}