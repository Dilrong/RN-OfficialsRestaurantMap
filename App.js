import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { MapScreen, ListScreen, TaxScreen, BoardScreen, EtcScreen, LoginScreen, VersionScreen } from './screens/index';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const EtcStack = createStackNavigator({
  Etc: EtcScreen,
  Version: VersionScreen,
}, {
  initialRouteName: 'Etc',
  header: null,
  headerMode: 'none',
})

const BoardStack = createStackNavigator({
  Board: BoardScreen,
  Login: LoginScreen
}, {
  initialRouteName: 'Board',
  header: null,
  headerMode: 'none',
})

const TabNavigator = createBottomTabNavigator({
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
  Tax: {
    screen: TaxScreen,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <Ionicons
        name='ios-card'
        color='white'
        size={24}
        />
      )
    })
  },
  ETC: {
    screen: EtcStack,
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

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  return (
    <AppContainer/>
  );
}