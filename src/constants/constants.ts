import CategorySvg from "../Assets/Svg/CategorySvg";
import FavSvg from "../Assets/Svg/FavSvg";
import HomeSvg from "../Assets/Svg/HomeSvg";
import SearchSvg from "../Assets/Svg/SearchSvg";
import { CategoryScreen } from "../Screens/Category";
import { FavouritesScreen } from "../Screens/Favourites";
import Home from "../Screens/Home.Screen";
import { SearchScreen } from "../Screens/Search";

//https://www.svgrepo.com/svg/14071/search

export default class Constants {

    static BottomTabStates = {
        SHOW: 'SHOW',
        HIDE: 'HIDE'
    }

    static BottomTabs = [
        {
            title:"Search",
            Icon: SearchSvg,
            value:"search",
            index:0,
            component:SearchScreen,
            color:'#f05175',
            showHeader: false
        }, {
            title:"Home",
            Icon: HomeSvg,
            value:"home",
            index:1,
            component:Home,
            color:'#2ac1c8',
            showHeader: false
        },
        // {
        //     title:"Favourites",
        //     Icon: FavSvg,
        //     value:"favourite",
        //     index:2,
        //     component:FavouritesScreen,
        //     color:'#ff4141',
        //     showHeader: false
        // },
        {
            title:"Categories",
            Icon: CategorySvg,
            value:"categories",
            index:3,
            component:CategoryScreen,
            color:'#3734ff',
            showHeader: false
        },
    ]

    static AppHeader = {
        height:50
    }

}