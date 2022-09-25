import Config from "react-native-config";

const _config = Config.getConstants();

const env = {
    WALLPAPER_API_URL: _config.WALLPAPER_API_URL,
    unSplashAccessKey: _config.UNSPLASH_ACCESS_KEY,
    unSplashSecretKey: _config.UNSPLASH_SECRET_KEY,
    VERSION_NAME:_config.VERSION_NAME,
    VERSION_CODE:_config.VERSION_CODE,
    DEBUG:_config.DEBUG,
    BUILD_TYPE:_config.BUILD_TYPE,
    APPLICATION_ID:_config.APPLICATION_ID,
    PIXEL_API_KEY:_config.PIXEL_API_KEY,
    PIXBAY_KEY:_config.PIXBAY_KEY
};

export const config : typeof env = env;

export default config;