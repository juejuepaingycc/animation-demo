import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

// Components
import styles from './Style';

const Home = ({navigation}) => {

    const list = [
        {
            id: 1,
            label: 'Timing',
            pressItem: ()=> timingHandler()
        },
        {
            id: 2,
            label: 'Spring',
            pressItem: ()=> springHandler()
        },
        {
            id: 3,
            label: 'Decay',
            pressItem: ()=> decayHandler()
        },
    ]

    const timingHandler = () => {
        navigation.navigate('Timing')
    }

    const springHandler = () => {
        navigation.navigate('Spring')
    }

    const decayHandler = () => {
        navigation.navigate('Decay')
    }


    const composeHandler = () => {
        navigation.navigate('ComposeAnimation')
    }

    const interpolationHandler = () => {
        navigation.navigate('Interpolation')
    }

    const reanimatedTimingHandler = () => {
        navigation.navigate('ReanimatedTiming')
    }

    const reanimatedSpringHandler = () => {
        navigation.navigate('ReanimatedSpring')
    }

    const reanimatedSequenceHandler = () => {
        navigation.navigate('ReanimatedSequence')
    }

    return (
        <View style={styles.container}>
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

            <TouchableOpacity
                style={styles.btn}
                onPress={interpolationHandler}>
                <Text style={styles.btnTxt}>
                    Interpolation
                </Text>
            </TouchableOpacity>

            <Text style={styles.title}>
                Composing Animations
            </Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={composeHandler}>
                <Text style={styles.btnTxt}>
                    Sequence + Parallel
                </Text>
            </TouchableOpacity>

            <Text style={styles.title}>
                Reanimated 2
            </Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={reanimatedTimingHandler}>
                <Text style={styles.btnTxt}>
                    Reanimated Timing
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={reanimatedSpringHandler}>
                <Text style={styles.btnTxt}>
                    Reanimated Spring
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={reanimatedSequenceHandler}>
                <Text style={styles.btnTxt}>
                    Reanimated Sequence
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;