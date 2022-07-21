import React, {useEffect, useRef} from 'react';
import {
    View,
    Animated
} from 'react-native';
import {
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

// Components
import styles from './Style';

const ComposeAnimation = () => {

    const position = useRef(new Animated.Value(10)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    const positionY =  useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    position,
                    {
                        toValue: 250,
                        duration: 3000, // milliseconds
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    opacity,
                    {
                        toValue: 1,
                        duration: 3000, // milliseconds
                        useNativeDriver: true
                    }
                ),
            ]),
            Animated.spring(
                positionY,
                {
                    toValue: hp(30),
                    friction: 1,
                    delay: 1000,
                    useNativeDriver: true
                }
            ),
        ]).start()    
    }, [])

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.box,
                    {
                        opacity: opacity,
                        transform: [
                            {
                                translateX: position
                            },
                            {
                                translateY: positionY
                            }
                        ]
                    }
                ]}
            />
        </View>
    )
}

export default ComposeAnimation;