import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../navigation/homeStack';
import TaskListStack from '../navigation/taskListStack';
import CelebrateStack from '../navigation/celebrateStack';
import ActivityLogStack from '../navigation/activityLogStack';
import ProfileStack from '../navigation/profileStack';
  
const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TaskListStack"
        component={TaskListStack}
        options={{
          tabBarLabel: 'Task List',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add-circle' : 'add-circle-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CelebrateStack"
        component={CelebrateStack}
        options={{
          tabBarLabel: 'Celebrate',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ActivityLogStack"
        component={ActivityLogStack}
        options={{
          tabBarLabel: 'Activity Log',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
