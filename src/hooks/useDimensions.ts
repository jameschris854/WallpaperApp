import { Dimensions } from 'react-native';

const useDimensions = (source : "window" | "screen") => {

    const dimension = Dimensions.get(source)

    const {height ,width } = dimension
    
    return {height,width}
}

export default useDimensions