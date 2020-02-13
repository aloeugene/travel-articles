import React from 'react';
import {Text, View, Image} from 'react-native';
import commonStyles from '../../common/styles';

const ListHeader = () => (
  <View style={[commonStyles.flex, commonStyles.row, commonStyles.header]}>
    <View>
      <Text style={{fontSize: 12, color: 'grey'}}>Search for place</Text>
      <Text style={{fontSize: 24}}>Destination</Text>
    </View>
    <View>
      <Image
        style={commonStyles.avatar}
        source={{
          uri:
            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9',
        }}
      />
    </View>
  </View>
);

export default ListHeader;
