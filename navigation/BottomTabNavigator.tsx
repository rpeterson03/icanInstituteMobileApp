import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ClassesScreen from '../screens/ClassesScreen';
import CoachingScreen from '../screens/CoachingScreen';
import NeuroToolsScreen from '../screens/NeuroToolsScreen';

import { BottomTabParamList, HomeParamList, ClassesParamList, CoachingParamList, NeuroToolsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Classes"
        component={ClassesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book-open-variant" color={color} />,
        }}
      />
          <BottomTab.Screen
        name="Coaching"
        component={CoachingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="account-supervisor" color={color} />,
        }}
      />
           <BottomTab.Screen
        name="Neuro Tools"
        component={NeuroToolsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="toolbox" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const ClassesStack = createStackNavigator<ClassesParamList>();

function ClassesNavigator() {
  return (
    <ClassesStack.Navigator>
      <ClassesStack.Screen
        name="ClassesScreen"
        component={ClassesScreen}
        options={{ headerTitle: 'Classes' }}
      />
    </ClassesStack.Navigator>
  );
}

const CoachingStack = createStackNavigator<CoachingParamList>();

function CoachingNavigator() {
  return(
    <CoachingStack.Navigator>
      <CoachingStack.Screen
        name="CoachingScreen"
        component={CoachingScreen}
        options={{ headerTitle: 'Coaching' }}
      />
    </CoachingStack.Navigator>
  )
}

const NeuroToolsStack = createStackNavigator<NeuroToolsParamList>();

function NeuroToolsNavigator() {
  return (
    <NeuroToolsStack.Navigator>
      <NeuroToolsStack.Screen
      name="NeuroToolsScreen"
      component={NeuroToolsScreen}
      options={{headerTitle:'Neuro Tools'}}
      />
    </NeuroToolsStack.Navigator>
  )
}