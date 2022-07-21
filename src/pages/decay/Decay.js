import React, {useEffect, useRef} from 'react';
import {
    View,
    Text,
    Animated
} from 'react-native';

// Components
import styles from './Style';

const Decay = () => {

    const position = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.decay(
            position,
            {
                velocity: 0.95,
                deceleration: 0.998,
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
                                translateY: position
                            }
                        ]
                    }
                ]}
            />
        </View>
    )
}

export default Decay;