import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../screens/List';
import Article from '../screens/Article';
import ListHeader from './components/ListHeader';
import ArticleHeader from './components/ArticleHeader';

const Stack = createStackNavigator();

const Travel = () => (
  <Stack.Navigator initialRouteName='list' screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
    <Stack.Screen
      name='list'
      component={List}
      options={{
        headerStyle: {
          height: 120,
          backgroundColor: 'transparent',
        },
        headerTitle: () => <ListHeader />,
      }}
    />
    <Stack.Screen
      name='article'
      component={Article}
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerBackTitleVisible: false,
        headerLeft: null,
        headerTransparent: true,
        headerTitle: () => <ArticleHeader goBack={navigation.goBack} />,
      })}
    />
  </Stack.Navigator>
);

export default Travel;
