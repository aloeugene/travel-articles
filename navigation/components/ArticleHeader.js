import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../../common/styles';

const ArticleHeader = ({goBack}) => (
  <View style={[commonStyles.flex, commonStyles.row, commonStyles.header]}>
    <TouchableOpacity activeOpacity={0.5} hitSlop={{top: 15, bottom: 15, left: 15, right: 15}} onPress={() => goBack()}>
      <Icon name='chevron-left' size={24} color='white' />
    </TouchableOpacity>
    <View>
      <Icon name='more-horiz' size={24} color='white' />
    </View>
  </View>
);

export default ArticleHeader;
