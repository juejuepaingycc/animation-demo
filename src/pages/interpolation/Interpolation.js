import React, {useEffect, useRef} from 'react';
import {
    View,
    Animated
} from 'react-native';

// Components
import styles from './Style';

const Interpolation = () => {

    const position = useRef(new Animated.Value(10)).current;

    useEffect(() => {
        Animated.timing(
            position,
            {
                toValue: 250,
                duration: 2000,
                useNativeDriver: false // useNativeDriver: true is not supported for COLOR
            }
        ).start()
    }, [])

    const bgColor = position.interpolate({
        inputRange: [10, 250],
        outputRange: ['red', 'green']
    });

    const bgColor2 = position.interpolate({
        inputRange: [10, 100, 250],
        outputRange: ['red', 'green', 'blue']
    });

    const rotation = position.interpolate({
        inputRange: [10, 250],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.box,
                    {
                        transform: [
                            {
                                translateX: position
                            },
                            {
                                rotate: rotation
                            }
                        ],
                        backgroundColor: bgColor2
                    }
                ]}
            />
        </View>
    )
}

export default Interpolation;