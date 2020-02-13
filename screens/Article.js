import React, {useState} from 'react';
import {Text, StyleSheet, View, Dimensions, Image, ImageBackground, ScrollView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import commonStyles from '../common/styles';
import Rating from './components/Rating';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  carousel: {
    width,
    height: height / 1.7,
  },
  image: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
  },
  dots: {
    width: 10,
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
  },
  avatarWrapper: {
    position: 'absolute',
    right: 30,
    top: -25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

const renderImage = ({item}) => <ImageBackground style={styles.image} source={{uri: item}} />;

const Article = ({route}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const {
    item: {
      title,
      description,
      rating,
      user: {avatar},
      images,
    },
  } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[commonStyles.column, styles.carousel]}>
        <Carousel
          data={images}
          renderItem={renderImage}
          sliderWidth={width}
          itemWidth={width}
          inactiveSlideScale={1}
          onSnapToItem={index => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={images.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.activeDot}
          inactiveDotStyle={styles.dots}
          containerStyle={{marginTop: -70, marginBottom: 5}}
        />
      </View>
      <View
        style={[
          commonStyles.column,
          {
            position: 'relative',
            marginTop: -20,
            padding: 36,
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        ]}
      >
        <View style={styles.avatarWrapper}>
          <Image source={{uri: avatar}} style={styles.avatar} />
        </View>
        <Text style={{marginBottom: 15, fontSize: 24, fontWeight: '600'}}>{title}</Text>
        <View style={[commonStyles.row, {alignItems: 'center', marginBottom: 25}]}>
          <Rating rating={rating} />
          <Text style={{marginLeft: 4, fontWeight: '600', color: '#007BFA'}}>{rating}</Text>
        </View>
        <Text style={{lineHeight: 24, color: 'grey'}}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default Article;
