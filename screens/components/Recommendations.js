import React from 'react';
import {Text, StyleSheet, View, Dimensions, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../../common/styles';
import Rating from './Rating';

const {width} = Dimensions.get('screen');

const celciusSign = '\u2103';

const styles = StyleSheet.create({
  recommended: {
    paddingHorizontal: 36,
  },
  recommendation: {
    width: (width - 72) / 2,
    height: width - 72,
    marginRight: 18,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  recommendationImage: {
    width: (width - 72) / 2,
    height: (width - 72) / 2,
    justifyContent: 'space-between',
    padding: 18,
  },
});

const renderRecommendation = ({item: {temperature, preview, title, location, rating}}) => (
  <View style={[commonStyles.column, commonStyles.shadow, styles.recommendation]}>
    <ImageBackground
      style={[commonStyles.flex, commonStyles.row, commonStyles.shadow, styles.recommendationImage]}
      imageStyle={{borderTopRightRadius: 10, borderTopLeftRadius: 10}}
      source={{uri: preview}}
    >
      <Text style={{color: 'white'}}>
        {temperature}
        {celciusSign}
      </Text>
      <Icon name='bookmark-border' size={16} color='white' />
    </ImageBackground>
    <View style={[commonStyles.flex, commonStyles.column, {justifyContent: 'space-between', padding: 18}]}>
      <View>
        <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 8}}>{title}</Text>
        <Text style={{fontSize: 12, color: 'grey'}}>{location}</Text>
      </View>
      <View style={[commonStyles.row, {alignItems: 'center'}]}>
        <Rating rating={rating} />
        <Text style={{marginLeft: 4, color: '#007BFA'}}>{rating}</Text>
      </View>
    </View>
  </View>
);

const Recommendations = ({destinations}) => (
  <View style={[commonStyles.flex, commonStyles.column, styles.recommended]}>
    <View style={[commonStyles.row, {justifyContent: 'space-between', alignItems: 'center', marginBottom: 24}]}>
      <Text style={{fontSize: 20}}>Recommended</Text>
      <Text style={{color: 'grey'}}>More</Text>
    </View>
    <View style={[commonStyles.column, styles.recommendedList]}>
      <Carousel
        data={destinations}
        renderItem={renderRecommendation}
        sliderWidth={width}
        itemWidth={width / 3}
        containerCustomStyle={{marginBottom: 42, overflow: 'visible'}}
        slideStyle={{marginRight: 56, flex: 1}}
        activeSlideAlignment='start'
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
    </View>
  </View>
);

export default Recommendations;
