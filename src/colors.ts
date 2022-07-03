import { useColorScheme } from "react-native";


export default class Colors {

    static isThemeDark = true

    static getAppTheme = () => {
        if(this.isThemeDark) {
            return {
                primary:"red",
                secondary:"blue",
                darkText:"#ffff",
                lightText:"#fafafa",
                backgroundColorDark:"#000",
                backgroundColorLight: "grey",
            }
        }else{
            return {
                primary:"red",
                secondary:"blue",
                darkText:"#000000",
                lightText:"#fff",
                backgroundColorDark:"grey",
                backgroundColorLight: "#ffffff",
            }
        }
    }

    static Theme = Colors.getAppTheme()

    static primary = this.Theme.primary
    static secondary = this.Theme.secondary
    static darkText = this.Theme.darkText
    static lightText = this.Theme.lightText
    static backgroundColorDark = this.Theme.backgroundColorDark
    static backgroundColorLight = this.Theme.backgroundColorLight
    static light = '#ffff'
}