import React, {useEffect} from 'react';
import {
    View
} from 'react-native';
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    withTiming,
    Easing,
    withSequence
} from 'react-native-reanimated';

// Components
import styles from './Style';

const ReanimatedSequence = () => {

    const position = useSharedValue(10);

    // Create animated styles
    const animatedCircle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: position.value
                }
            ]
        }
      });

    useEffect(() => {
        position.value = withSequence(
            withTiming(250, {
                duration: 2000,
                easing: Easing.in
            }),
            withTiming(10, {
                duration: 2000,
                easing: Easing.bounce
            }),
        )
    }, [])


    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.box,
                    animatedCircle
                ]}
            />
        </View>
    )
}

export default ReanimatedSequence;