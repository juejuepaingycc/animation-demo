import React, {useRef} from 'react';
import {
    View,
    Text,
    Animated,
    Easing,
    TouchableOpacity
} from 'react-native';

// Components
import styles from './Style';

const Timing = () => {

    const position = useRef(new Animated.Value(10)).current 

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
        Animated.timing(
            position,
            {
                toValue: 250,
                duration: 2000, // milliseconds
                easing: Easing.in,
                useNativeDriver: false
                //delay: number
            }
        ).start()
    }

    const bounceHandler = () => {
        Animated.timing(
            position,
            {
                toValue: 10,
                duration: 3000, // milliseconds
                easing: Easing.bounce,
                useNativeDriver: false
                //delay: number
            }
        ).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.box,
                    {
                        transform: [
                            {
                                translateX: position
                            }
                        ]
                    }
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

export default Timing;