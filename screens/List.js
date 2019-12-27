import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, FlatList } from 'react-native';

const { width, height } = Dimensions.get('screen');

const mocks = [
  {
    id: 1,
    user: {
      name: 'Lelia Chavez',
      avatar: ''
    },
    title: 'Maldives',
    description: 'Maldives description',
    location: 'Wallis and Futuna',
    temperature: 20,
    rating: 4.7,
    reviews: 3123,
    preview: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    paddingTop: 80,
    paddingHorizontal: 36,
    paddingBottom: 30,
    backgroundColor: 'white'
  },
  articles: {
    // paddingHorizontal: 36
  },
  destination: {
    width: width - (36 * 2),
    marginHorizontal: 36,
    padding: 36,
    borderRadius: 12,
    backgroundColor: 'pink'
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 50
  },
  recommended: {
    padding: 36
  }
});

class Articles extends Component {
  static navigationOptions = {
    header: (
      <View style={
        [
          styles.flex, styles.row, styles.header,
          { justifyContent: 'space-between', alignItems: 'center' }
        ]
      }>
        <View>
          <Text>Search for place</Text>
          <Text style={{ fontSize: 24 }}>Destination</Text>
        </View>
        <View>
          <Text>Avatar</Text>
        </View>
      </View>
    )
  };

  renderDestination = ({ preview, title, rating, user: { avatar } }) => {
    return (
      <ImageBackground
        style={styles.flex}
        source={{ uri: preview }}
      >
        <View style={[styles.flex, styles.row, styles.destination]}>
          <View>
            <Image
              source={{ uri: avatar }}
              style={styles.avatar}
            />
          </View>
          <View style={[styles.flex, styles.column]}>
            <Text>{name}</Text>
          </View>
        </View>
      </ImageBackground>
    )
  }

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <FlatList
          horizontal
          scrollEnabled
          pagingEnabled
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={this.props.destinations}
          renderItem={({ destination }) => this.renderDestination(destination)}
        />
      </View>
    )
  }

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <ScrollView horizontal>
          <Text>Recommended 1</Text>
          <Text>Recommended 2</Text>
          <Text>Recommended 3</Text>
        </ScrollView>
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.flex, styles.articles]}>
        {this.renderDestinations()}
        {this.renderRecommended()}
      </View>
    )
  }
}

Articles.defaultProps = {
  destinations: mocks
}

export default Articles;
