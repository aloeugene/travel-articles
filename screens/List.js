import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Destinations from './components/Destinations';
import Recommendations from './components/Recommendations';

const mocks = [
  {
    id: 1,
    user: {
      name: 'Lelia Chavez',
      avatar:
        'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
    },
    title: 'Wallis and Futuna',
    description: 'Wallis and Futuna - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus dapibus dui et scelerisque. Ut in augue nibh. Vestibulum nec odio ante. Mauris aliquam consectetur pulvinar. In commodo egestas ipsum.',
    location: 'Wallis and Futuna',
    temperature: 20,
    rating: 3.5,
    reviews: 3123,
    preview: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 2,
    user: {
      name: 'Lelia Chavez',
      avatar:
        'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
    },
    title: 'Medhufushi Island Resort',
    description: 'Medhufushi Island Resort - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus dapibus dui et scelerisque. Ut in augue nibh. Vestibulum nec odio ante. Mauris aliquam consectetur pulvinar. In commodo egestas ipsum.',
    location: 'Medhufushi Island Resort, Maldives',
    temperature: 20,
    rating: 4.7,
    reviews: 3123,
    preview: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 3,
    user: {
      name: 'Lelia Chavez',
      avatar:
        'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
    },
    title: 'Medhufushi Island Resort',
    description: 'Medhufushi Island Resort - description',
    location: 'Medhufushi Island Resort, Maldives',
    temperature: 20,
    rating: 4.7,
    reviews: 3123,
    preview: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 4,
    user: {
      name: 'Lelia Chavez',
      avatar:
        'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
    },
    title: 'Medhufushi Island Resort',
    description: 'Medhufushi Island Resort - description',
    location: 'Medhufushi Island Resort, Maldives',
    temperature: 20,
    rating: 4.7,
    reviews: 3123,
    preview: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

const List = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop: 24, paddingBottom: 36}}>
      <Destinations
        destinations={mocks}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        navigateTo={navigation.navigate}
      />
      <Recommendations destinations={mocks} />
    </ScrollView>
  );
};

export default List;
