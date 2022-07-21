import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    withTiming, 
    Easing
} from 'react-native-reanimated';

// Components
import styles from './Style';

const ReanimatedTiming = () => {

    //const position = useRef(new Animated.Value(10)).current 
    const position = useSharedValue(10);

    // Create animated styles
    const animatedBox = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: position.value
                }
            ]
        };
      });

    const list = [
        {
            id: 1,
            label: 'Ease In',
            pressItem: ()=> easeInHandler()
        },
        {
            id: 2,
            label: 'Bounce',
            pressItem: ()=> bounceHandler()
        }
    ]

    const easeInHandler = () => {
     /*    Animated.timing(
            position,
            {
                toValue: 250,
                duration: 2000, // milliseconds
                easing: Easing.in,
                useNativeDriver: false
                //delay: number
            }
        ).start() */

        position.value = withTiming(250, {
            duration: 2000,
            easing: Easing.in
          });
    }

    const bounceHandler = () => {
        position.value = withTiming(10, {
            duration: 2000,
            easing: Easing.bounce
          });
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.box,
                    animatedBox
                ]}
            />
            {list.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.btn}
                        onPress={item.pressItem}>
                        <Text style={styles.btnTxt}>
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default ReanimatedTiming;