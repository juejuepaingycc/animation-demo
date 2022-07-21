import React, {useEffect, useRef} from 'react';
import {
    View,
    Animated
} from 'react-native';
import {
    widthPercentageToDP as wp
  } from 'react-native-responsive-screen';

// Components
import styles from './Style';

const Spring = () => {

    const position = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(
            position,
            {
                toValue: wp(50),
                friction: 1,
                delay: 1000,
                useNativeDriver: true
            }
        ).start()
    }, [])

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
        </View>
    )
}

export default Spring;