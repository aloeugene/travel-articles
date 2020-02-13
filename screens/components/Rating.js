import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Rating = ({rating}) => {
  const stars = new Array(5).fill(0);

  return stars.map((star, index) => {
    const activeStar = Math.floor(rating) >= index + 1;

    return <Icon key={`star-${index}`} name='star' size={14} color={activeStar ? '#007BFA' : 'lightgrey'} />;
  });
};

export default Rating;
