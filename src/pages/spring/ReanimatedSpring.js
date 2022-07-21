import React, {useEffect} from 'react';
import {
    View
} from 'react-native';
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    withSpring,
    withDelay,
    withDecay
} from 'react-native-reanimated';
import {
    widthPercentageToDP as wp
  } from 'react-native-responsive-screen';


// Components
import styles from './Style';

const ReanimatedSpring = () => {

    //const position = useRef(new Animated.Value(10)).current 
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
       // position.value = withSpring(wp(50))
        position.value = withDelay(1000, withSpring(wp(50)))
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

export default ReanimatedSpring;