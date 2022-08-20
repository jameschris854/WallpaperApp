class Colors {
  isThemeDark: boolean = false;

  constructor() {
    this.isThemeDark = false;
  }

  updateAppTheme = (value: boolean) => (this.isThemeDark = value);

  getAppTheme = () => {
    let theme: any
    if (this.isThemeDark) {
      theme = {
        isDark: true,
        primary: 'rgb(13, 0, 32)',
        secondary: 'blue',
        darkText: '#ffff',
        lightText: '#dbc9df',
        backgroundColorDark: 'rgb(13, 0, 32)',
        backgroundColorLight: '#69227a',
      };
    } else {
      theme = {
        isDark: false,
        primary: '#290066',
        secondary: 'blue',
        darkText: '#000000',
        lightText: '#fff',
        backgroundColorDark: '#290066',
        backgroundColorLight: '#ffffff',
        cardBg: this.backgroundColorLight
      };
    }

    theme = {
      ...theme,
      get cardBg() {
        return this.isDark ? theme.backgroundColorDark : theme.backgroundColorLight
      },
      isDarkMode: this.isThemeDark,
    };

    return theme
  };

  get Theme(){
    return this.getAppTheme()
  }

  primary = this.Theme.primary;
  secondary = this.Theme.secondary;
  darkText = this.Theme.darkText;
  lightText = this.Theme.lightText;
  backgroundColorDark = this.Theme.backgroundColorDark;
  backgroundColorLight = this.Theme.backgroundColorLight;
  light = '#ffff';
}

export default new Colors();
