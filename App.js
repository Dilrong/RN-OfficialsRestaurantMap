import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MapScreen, ListScreen, BoardScreen } from './screens/index';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const TapNavigator = createBottomTabNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <MaterialCommunityIcons
        name='map-marker'
        color='white'
        size={24}
        />
      )
    })
  },
  List: {
    screen: ListScreen,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <MaterialCommunityIcons
        name='format-list-bulleted'
        color='white'
        size={24}
        />
      )
    })
  },
  Board: {
    screen: BoardScreen,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <Ionicons
        name='ios-chatboxes'
        color='white'
        size={24}
        />
      )
    })
  },
  ETC: {
    screen: BoardScreen,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <MaterialCommunityIcons
        name='dots-horizontal'
        color='white'
        size={24}
        />
      )
    })
  }
}, {
  initialRouteName: 'Map',
  header: null,
  headerMode: 'none',
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#bdc3c7',
    style: {
      backgroundColor: '#12191d'
    }
  }
});

const AppContainer = createAppContainer(TapNavigator);

export default function App() {
  return (
    <AppContainer/>
  );
}