import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/home/Home';
import TimingScreen from '../pages/timing/Timing';
import SpringScreen from '../pages/spring/Spring';
import DecayScreen from '../pages/decay/Decay';
import ComposeAnimation from '../pages/composeAnimation/ComposeAnimation';
import Interpolation from '../pages/interpolation/Interpolation';
import ReanimatedTimingScreen from '../pages/timing/ReanimatedTiming';
import ReanimatedSpringScreen from '../pages/spring/ReanimatedSpring';
import ReanimatedSequenceScreen from '../pages/composeAnimation/ReanimatedSequence';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{  }}
                />
                <Stack.Screen 
                    name="Timing" 
                    component={TimingScreen}
                />
                <Stack.Screen 
                    name="Spring" 
                    component={SpringScreen}
                />
                <Stack.Screen 
                    name="Decay" 
                    component={DecayScreen}
                />
                 <Stack.Screen 
                    name="ComposeAnimation" 
                    component={ComposeAnimation}
                />
                 <Stack.Screen 
                    name="Interpolation" 
                    component={Interpolation}
                />
                <Stack.Screen 
                    name="ReanimatedTiming" 
                    component={ReanimatedTimingScreen}
                />
                <Stack.Screen 
                    name="ReanimatedSpring" 
                    component={ReanimatedSpringScreen}
                />
                <Stack.Screen 
                    name="ReanimatedSequence" 
                    component={ReanimatedSequenceScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;