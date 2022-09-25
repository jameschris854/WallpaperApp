import CategorySvg from "../Assets/Svg/CategorySvg";
import FavSvg from "../Assets/Svg/ShareSvg";
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
            index:2,
            component:CategoryScreen,
            color:'#3734ff',
            showHeader: false
        },
    ]

    static AppHeader = {
        height:50
    }

    static Categories = [
        {
            cover_photo:'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Nature'
        },{
            cover_photo:'https://images.pexels.com/photos/732629/pexels-photo-732629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'People'
        },{
            cover_photo:'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Dark'
        },{
            cover_photo:'https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Abstract'
        },{
            cover_photo:'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Cars'
        },{
            cover_photo:'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Animals'
        },{
            cover_photo:'https://images.pexels.com/photos/2457284/pexels-photo-2457284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Minimalist'
        },{
            cover_photo:'https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Flowers'
        },{
            cover_photo:'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Space'
        },
    ]

}