import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import GradientBackground from "./GradientBackground";

const withGradientBg = WrappedComponent => ({ ...props }) => {
    const Colors = useSelector((state: RootState) => state.commonReducer.colors)
    
    return(
       <GradientBackground fromColor={Colors.backgroundColorDark} toColor={Colors.backgroundColorLight}>
           <WrappedComponent {...props} />
       </GradientBackground>
     );
}


export default withGradientBg