import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        width: hp(12),
        height: hp(12),
        borderRadius: hp(6),
        backgroundColor: 'red',
        marginVertical: hp(5)
    },
    btn: {
        width: wp(50),
        height: hp(4),
        backgroundColor: '#2351a6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(3),
        marginBottom: hp(1),
        alignSelf: 'center'
    },
    btnTxt: {
        fontSize: hp(1.8),
        color: '#fff'
    }
})

export default styles;