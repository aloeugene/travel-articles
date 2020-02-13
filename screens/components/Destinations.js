import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../../common/styles';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  rating: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
  },
  destination: {
    position: 'relative',
    width: width - 36 * 2,
    height: height / 2.5,
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 24,
    borderRadius: 12,
    backgroundColor: 'pink',
  },
  destinationInfo: {
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 18,
    position: 'absolute',
    bottom: -46,
    left: 36,
    right: 36,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  dots: {
    borderColor: 'transparent',
    backgroundColor: '#DCE0E9',
  },
  activeDot: {
    width: 10,
    height: 10,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: '#007BFA',
    backgroundColor: 'white',
  },
});

const renderDestination = (
  {
    item,
    item: {
      preview,
      title,
      description,
      location,
      rating,
      user: {avatar, name},
    },
  },
  navigateTo,
) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => navigateTo('article', {item})}>
    <ImageBackground
      style={[commonStyles.flex, commonStyles.shadow, styles.destination]}
      imageStyle={{borderRadius: 12}}
      source={{uri: preview}}
    >
      <View style={[commonStyles.row, {justifyContent: 'space-between'}]}>
        <View style={{flex: 0}}>
          <Image source={{uri: avatar}} style={commonStyles.avatar} />
        </View>
        <View style={[commonStyles.column, {flex: 2, paddingHorizontal: 10}]}>
          <Text style={{marginBottom: 2, color: 'white', fontWeight: 'bold'}}>{name}</Text>
          <View style={commonStyles.row}>
            <Icon name='location-on' color='white' style={{marginRight: 2}} />
            <Text style={{fontSize: 12, color: 'white'}}>{location}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
      <View style={[commonStyles.column, commonStyles.shadow, styles.destinationInfo]}>
        <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 8}}>{title}</Text>
        <Text style={{color: 'grey'}}>{description.slice(0, 45)}...</Text>
        <Icon name='chevron-right' color='grey' size={18} style={{position: 'absolute', right: 14, bottom: 14}} />
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const Destinations = ({destinations, activeSlide, setActiveSlide, navigateTo}) => (
  <View style={[commonStyles.column, styles.destinations]}>
    <Carousel
      data={destinations}
      renderItem={item => renderDestination(item, navigateTo)}
      sliderWidth={width}
      itemWidth={width}
      containerCustomStyle={{marginBottom: 42, overflow: 'visible'}}
      onSnapToItem={index => setActiveSlide(index)}
    />
    <Pagination
      dotsLength={destinations.length}
      activeDotIndex={activeSlide}
      dotStyle={styles.activeDot}
      inactiveDotStyle={styles.dots}
      containerStyle={{marginBottom: 16}}
    />
  </View>
);

export default Destinations;
