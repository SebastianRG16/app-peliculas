import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable, Text, View} from 'react-native';
import {Home} from '../screens/home/Index';
import {Configuration} from '../screens/configuration/Index';
import {Movies} from '../screens/movies/Index';
import {MovieId} from '../screens/movies/movieId/Index';
import {useThemeStore} from '../storage/storage';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  HomeTabs: undefined;
  Home: undefined;
  MovieId: undefined;
};

export const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="MovieId" component={MovieId} />
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  const navbarColor = useThemeStore(state => state.navbarColor);
  const setNavbarColor = useThemeStore(state => state.setNavbarColor);

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: navbarColor,
          height: 81,
          paddingTop: 20,
        },
        tabBarActiveTintColor: '#360D04',
        tabBarInactiveTintColor: '#EE6F2D',
        tabBarButton: props => <Pressable {...props} />,
      }}>
      <Tab.Screen
        name="configuration"
        component={Configuration}
        options={{
          title: 'Configuracion',
          tabBarIcon: ({color}) => (
            <View style={{padding: 10, alignItems: 'center'}}>
              <Text
                style={{
                  color,
                  fontSize: 30,
                  textAlign: 'center',
                  width: '100%',
                  height: 40,
                }}>
                ⚙️
              </Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          title: 'Inicio',
          tabBarIcon: ({color}) => (
            <View style={{padding: 10, alignItems: 'center'}}>
              <Text
                style={{
                  color,
                  fontSize: 30,
                  textAlign: 'center',
                  width: '100%',
                  height: 40,
                }}>
                🏠
              </Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Movie"
        component={Movies}
        options={{
          title: 'Peliculas',
          tabBarIcon: ({color}) => (
            <View style={{padding: 10, alignItems: 'center'}}>
              <Text
                style={{
                  color,
                  fontSize: 30,
                  textAlign: 'center',
                  width: '100%',
                  height: 40,
                }}>
                🎬
              </Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
