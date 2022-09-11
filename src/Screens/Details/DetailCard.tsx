import React, {useEffect, useState} from 'react';
import {Animated, Image, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DownloadSvg from '../../Assets/Svg/DownloadSvg';
import FavSvg from '../../Assets/Svg/FavSvg';
import useDimensions from '../../hooks/useDimensions';
import WallpaperManager from 'react-native-wallpaper-manage';
import ProgressiveImage from '../../components/ProgressiveImage';
import ApplyWallpaperSvg from '../../Assets/Svg/ApplyWallpaperSvg';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import Lottie from 'lottie-react-native';

const DetailCard = ({item}) => {
  const {height, width} = useDimensions('window');
  const [showOptions, setShowOptions] = useState(true);
  const animVal = new Animated.Value(0);
  const [showApplyWallpaperLoader,setApplyWallpaperLoader] = useState(false)


  const handleOptionState = () => {
    Animated.timing(animVal, {
      useNativeDriver: true,
      duration: 150,
      toValue: 1,
    }).start(() => {
      animVal.setValue(0);
      setShowOptions(!showOptions);
    });
  };

  const setAsWallpaper = () => {
    try {
        setApplyWallpaperLoader(true)
        setTimeout(async () => {
              await WallpaperManager.setWallpaper(item.links.download, 1);
              ToastAndroid.show('Wallpaper was set successfully!',500)
              setApplyWallpaperLoader(false)
        },500)
    } catch (e) {
      console.error(e);
    } finally{
    }
  };

  const downloadImage = () => {};

  const share = () => {

  };

  const bottom = showOptions
    ? animVal.interpolate({
        inputRange: [0, 1],
        outputRange: [70, 0],
      })
    : animVal.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 70],
      });
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  return (
    <TouchableWithoutFeedback
      onPress={handleOptionState}
      style={{height, width}}>
      <AnimatedSvg
        xmlns="http://www.w3.org/2000/svg"
        width={411}
        height={70}
        viewBox="0 0 411 70"
        fill="none"
        style={{
          position: 'absolute',
          bottom: 0,
          transform: [{translateY: bottom}],
          left: 0,
          zIndex: 2,
        }}>
        <Path fill="url(#paint0_linear_16_60)" d="M0 0H411V109H0z" />
        <Defs>
          <LinearGradient
            id="paint0_linear_16_60"
            x1={206}
            y1={109}
            x2={206}
            y2={-5.5}
            gradientUnits="userSpaceOnUse">
            <Stop />
            <Stop offset={0.484375} stopOpacity={0.328125} />
            <Stop offset={1} stopColor="#8C8C8C" stopOpacity={0} />
          </LinearGradient>
        </Defs>
      </AnimatedSvg>
      <View style={{position:'absolute',height,width,justifyContent:'center',alignItems:'center',zIndex:2,opacity:showApplyWallpaperLoader ? 1 : 0,backgroundColor:'rgba(1,1,1,0.5)'}}>
        <Lottie
          resizeMode={'cover'}
          style={{height:height/3,width:height/3}}
          source={require('../../Assets/Lottie/PaintLoaderLottie.json')}
          useNativeLooping
          autoPlay={true}
          loop={true}
          speed={0.5}
        />
      </View>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          transform: [{translateY: bottom}],
          width: '100%',
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-around',
          zIndex: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setAsWallpaper()} style={{width: 70}}>
          <ApplyWallpaperSvg />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => downloadImage()} style={{}}>
          <DownloadSvg height={20} width={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => share()}>
          <FavSvg color={'#fff'} height={20} width={20} />
        </TouchableOpacity>
      </Animated.View>
      <ProgressiveImage
        HighResImage={item.urls.raw}
        lowResImage={item.urls.small}
        style={{width: '100%', height: '100%', backgroundColor: Colors.cardBg}}
        resizeMode={'cover'}
      />
    </TouchableWithoutFeedback>
  );
};

export default DetailCard;
