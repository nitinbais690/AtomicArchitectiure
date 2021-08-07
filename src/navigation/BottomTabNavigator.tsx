/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Platform } from 'react-native';

import R from '@app/res/R';
import Text from '@app/components/common/Text';

import TabHomeScreen from '../screens/Home';
import TabChatScreen from '../screens/Chat';
import TabSOSScreen from '../screens/SOS';
import TabReportScreen from '../screens/Report';
import TabContactScreen from '../screens/Contacts';
import {
  BottomTabParamList,
  TabHomeParamList,
  TabChatParamList,
  TabSOSParamList,
  TabReportParamList,
  TabContactParamList,
} from './types';
import TabHomeSVG from '@app/res/images/svgs/TabHomeSVG';
import TabChatSVG from '@app/res/images/svgs/TabChatSVG';
import TabReportSVG from '@app/res/images/svgs/TabReportSVG';
import TabContactSVG from '@app/res/images/svgs/TabContactSVG';
import TabSOSSVG from '@app/res/images/svgs/TabSOSSVG';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="TabHome"
        backBehavior="none"
        tabBarOptions={{
          activeTintColor: R.color.primary,
          inactiveTintColor: R.color.gray4,
          showLabel: false,
          style: {
            height: Platform.OS === 'android' ? R.unit.scale(70) : R.unit.scale(90),
            backgroundColor: R.color.white,
          },
        }}
      >
        <BottomTab.Screen
          name="TabHome"
          component={TabHomeNavigator}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon title="Map" focused={focused} name={'home'} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="TabChat"
          component={TabChatNavigator}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon title="Chat" focused={focused} name={'credit-card'} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="TabSOS"
          component={TabSOSNavigator}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon title={''} focused={focused} name={'clipboard-list'} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="TabReport"
          component={TabReportNavigator}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon title="Report" focused={focused} color={color} name={'user-circle'} />
            ),
          }}
        />
        <BottomTab.Screen
          name="TabContact"
          component={TabContactNavigator}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon title="Contacts" focused={focused} color={color} name={'user-circle'} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { title: string; focused: boolean; name: string; color: string }) {
  return (
    <>
      {props.title === '' ? (
        <View
          style={{
            width: R.unit.scale(60),
            height: R.unit.scale(60),
            backgroundColor: props.focused ? R.color.primary : R.color.danger,
            borderRadius: R.unit.scale(30),
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: R.unit.scale(-40),
            shadowColor: R.color.black,
            shadowOffset: {
              width: 1,
              height: R.unit.scale(5),
            },
            shadowOpacity: 0.1,
            shadowRadius: R.unit.scale(4),
            elevation: R.unit.scale(4),
          }}
        >
          <TabSOSSVG colorStroke={props.focused ? R.color.white : R.color.white} />
        </View>
      ) : (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {props.title === 'Map' ? (
            <TabHomeSVG colorStroke={props.color} />
          ) : props.title === 'Chat' ? (
            <TabChatSVG colorStroke={props.color} />
          ) : props.title === 'Report' ? (
            <TabReportSVG fillColor={props.color} />
          ) : (
            <TabContactSVG colorStroke={props.color} />
          )}
          <Text variant="font10" color={props.color} gutterTop={2} fontWeight={'400'}>
            {props.title}
          </Text>
        </View>
      )}
    </>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={{ headerShown: false }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabChatStack = createStackNavigator<TabChatParamList>();

function TabChatNavigator() {
  return (
    <TabChatStack.Navigator>
      <TabChatStack.Screen
        name="TabChatScreen"
        component={TabChatScreen}
        options={{ headerShown: false }}
      />
    </TabChatStack.Navigator>
  );
}

const TabSOSStack = createStackNavigator<TabSOSParamList>();

function TabSOSNavigator() {
  return (
    <TabSOSStack.Navigator>
      <TabSOSStack.Screen
        name="TabSOSScreen"
        component={TabSOSScreen}
        options={{ headerShown: false }}
      />
    </TabSOSStack.Navigator>
  );
}

const TTabReportStack = createStackNavigator<TabReportParamList>();

function TabReportNavigator() {
  return (
    <TTabReportStack.Navigator>
      <TTabReportStack.Screen
        name="TabReportScreen"
        component={TabReportScreen}
        options={{ headerShown: false }}
      />
    </TTabReportStack.Navigator>
  );
}

const TabContactStack = createStackNavigator<TabContactParamList>();

function TabContactNavigator() {
  return (
    <TabContactStack.Navigator>
      <TabContactStack.Screen
        name="TabContactScreen"
        component={TabContactScreen}
        options={{ headerShown: false }}
      />
    </TabContactStack.Navigator>
  );
}
