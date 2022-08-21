import React, {useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
import {Animated, View} from 'react-native';
import useDimensions from '../hooks/useDimensions';
import {useDispatch, useSelector} from 'react-redux';
import App from '../../App';
import {RootState} from '../redux/store/store';
import { setSplashAnimationComplete } from '../redux/slice/commonSlice';

const Splash = () => {
  const [AnimVal] = useState(new Animated.Value(0));
  const {isAppLoaded,isSplashAnimationComplete} = useSelector((state: RootState) => state.commonReducer);
  const dispatch = useDispatch()
  const {height,width} = useDimensions('window')

  useEffect(() => {
    Animated.timing(AnimVal, {
      toValue: 1,
      useNativeDriver: false,
      duration: 2000,
    }).start(() => {
        dispatch(setSplashAnimationComplete())
    });
  }, []);

  console.log('spl',isSplashAnimationComplete,isAppLoaded)
  console.log('ch',isSplashAnimationComplete === false && isAppLoaded === false)
  return (
    <>
        <View style={{height,width}}>
            <App />
            {(isSplashAnimationComplete === false || isAppLoaded === false) && <Lottie
            resizeMode={'cover'}
            style={{position:'absolute',height:'100%',width:'100%',zIndex:1}}
            source={require('../Assets/Lottie/Loader-SplashLottie.json')}
            progress={AnimVal}
            autoPlay={false}
            loop={false}
            speed={0.5}
            />}
        </View>
    </>
  );
};

export default Splash;
