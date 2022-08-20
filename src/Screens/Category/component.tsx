import React, { useEffect } from 'react';
import { Animated, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import withGradientBg from '../../components/withGradientBg';
import {RootState} from '../../redux/store/store';
import * as Animatable from 'react-native-animatable';
import Sync from '../../Apis/sync';
import useDimensions from '../../hooks/useDimensions';
import SearchIllSvg from '../../Assets/Svg/SearchIllSvg';
import { setcategoryResults} from '../../redux/slice/categorySlice';
import GradientBackground from '../../components/GradientBackground';
import useHeaderAndFooterScrollAnimation from '../../hooks/useHeaderAndFooterScrollAnimation';
const {height, width} = useDimensions('window');
const HEADER_HEIGHT = 50;

const Component = () => {
  const Colors = useSelector((state: RootState) => state.commonReducer.colors);
  const Category = useSelector((state: RootState) => state.categoryReducer);
  const dispatch = useDispatch();
  const { headerBg,scrollOffset,handleScroll} = useHeaderAndFooterScrollAnimation()

  useEffect(() => {
    (async () => {
        try{
            const res = await Sync.getCategoryList()
            dispatch(setcategoryResults(res))
        }catch(e){
            console.error(e)
        }
      
    })();

  }, []);

  const _renderItem = ({item, index}) => {
    console.log(item.title)
    return (
      <Animatable.View
        key={index}
        iterationDelay={125 * index}
        animation={'fadeInUp'}
        duration={250}
        useNativeDriver
        easing={'ease-in-out'}
        style={{
          maxHeight: height / 5,
          width: '100%',
          marginTop: '4%',
          backgroundColor: Colors.cardBg,
          borderRadius: 15,
          overflow: 'hidden',
        }}>
        <Image
          source={{uri: item.cover_photo.urls.small}}
          style={{width: '100%', height: '100%'}}
          resizeMode={'cover'}
        />
        <GradientBackground fromColor={'black'} toColor={'white'} style={{position:'absolute',bottom:0,left:0,width:'100%',height:'100%',opacity:0.7}}>
            <Text style={{color:'#fff',fontSize:50,textAlignVertical:'center',textAlign:'center',width:'100%',height:'100%'}}>{item.title}</Text>
        </GradientBackground>
      </Animatable.View>
    );
  };

  return (
    <>
      <View style={{paddingHorizontal: 16, height: '100%'}}>
        <Animated.View
          style={{
            position: 'absolute',
            height: HEADER_HEIGHT,
            width: width,
            backgroundColor: headerBg,
            top: scrollOffset,
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1,
            flexDirection: 'column',
            paddingHorizontal: 16,
          }}>
          <Text style={{fontSize: 24, paddingTop: 16, width: '100%'}}>
            Category
          </Text>
        </Animated.View>
        {Category.categoryResults.length ? (
          <Animated.FlatList
            showsVerticalScrollIndicator={false}
            data={Category.categoryResults}
            renderItem={props => <_renderItem {...props} />}
            scrollEnabled
            horizontal={false}
            numColumns={1}
            onScroll={handleScroll}
            scrollEventThrottle={300}
            style={{flex: 1}}
            ListHeaderComponent={
              <View style={{height: HEADER_HEIGHT, width: '100%'}} />
            }
            ListFooterComponent={<View style={{height: 0, width: '100%'}} />}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <SearchIllSvg
              size={200}
              style={{transform: [{scale: 0.5}]}}
              Colors={Colors}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default withGradientBg(Component);
