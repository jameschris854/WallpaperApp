import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {Animated, Text} from 'react-native';
import {View} from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import Sync from '../../Apis/sync';
import BaseImageList from '../../components/BaseImageList';
import withGradientBg from '../../components/withGradientBg';
import Page from '../../constants/model/Page';
import useDimensions from '../../hooks/useDimensions';
import useHeaderAndFooterScrollAnimation from '../../hooks/useHeaderAndFooterScrollAnimation';
import { setSelectedCategoryItems } from '../../redux/slice/categorySlice';
import { setDetails } from '../../redux/slice/commonSlice';
import {RootState} from '../../redux/store/store';
import { WallpaperListRes } from '../../types/globalTypes';
import Lottie from 'lottie-react-native'
import colors from '../../constants/colors';

const HEADER_HEIGHT = 50;

const CategoryItemList = () => {
  const Category = useSelector((state: RootState) => state.categoryReducer);
  const Colors : typeof colors.Theme = useSelector((state: RootState) => state.commonReducer.colors)

  const {height, width} = useDimensions('window');
  const {headerBg, scrollOffset, handleScroll} = useHeaderAndFooterScrollAnimation();
  const dispatch = useDispatch();
  const route = useRoute();
  const selectedCat = route.params.selectedCat

  useEffect(() => {
    (async () => {
        setResultsInStore({results:[],total:0,total_pages:0,lastAnimatedIndex:0})
        await getSelectedCatList()
    })();
  },[])

  const setResultsInStore = (res: WallpaperListRes) => {
    dispatch(setDetails(res.results))
    dispatch(setSelectedCategoryItems(res))
}

  const getSelectedCatList = async () => {
    const res = await Sync.getByCatName(selectedCat.title)
    setResultsInStore(res)
  }

  const handlePageEndReached = async (e: Event, page: Page) => {
    if (page.totalPages && page.page >= page.totalPages) return;
    try {
      page.setPage(page.page + 1);
      const res = await Sync.getByCatName(selectedCat.title,page.page);
      page.setTotalPages(Category.totalPages);
      page.setTotalRecords(Category.totalRecords);

        setResultsInStore({
          results: [...Category.selectedCategoryResults, ...res.results],
          lastAnimatedIndex: Category.selectedCategoryResults.length - 1,
          total: res.total,
          total_pages: res.total_pages,
        },
      );
    } catch (e) {
      console.log('homne api wallL: ', e);
    }
  };

  return (
    <View
      style={{
        height: height,
        width: width,
        paddingHorizontal:16
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          height: HEADER_HEIGHT,
          backgroundColor: headerBg,
          top: scrollOffset,
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1,
          flexDirection: 'column',
          paddingHorizontal: 16,
        }}>
        <Text style={{fontSize: 24, paddingTop: 16, width: '100%'}}>
          {selectedCat.title}
        </Text>
      </Animated.View>
      {Category.selectedCategoryResults.length > 0 ? (
        <BaseImageList
          data={Category.selectedCategoryResults}
          handleScroll={handleScroll}
          pageHeaderHeight={HEADER_HEIGHT}
          handlePageEndReached={handlePageEndReached}
          lastAnimatedIndex={Category.lastAnimatedIndex}
        />
      ) : <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Lottie style={{width:150,height:150}} colorFilters={[{keypath:"Top 2",color:Colors.backgroundColorLight},{keypath:"Bottom 2",color:Colors.backgroundColorLight},{keypath:"Arch 2",color:Colors.backgroundColorLight},{keypath:"Circle 3",color:Colors.backgroundColorLight}]} source={require('../../Assets/Lottie/91518-blue-abstract-loader (1).json')} autoPlay loop />
          </View> }
    </View>
  );
};

export default withGradientBg(CategoryItemList);
