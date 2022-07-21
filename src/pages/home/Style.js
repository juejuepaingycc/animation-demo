import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: wp(50),
        height: hp(5),
        backgroundColor: '#2351a6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(3),
        marginBottom: hp(2)
    },
    btnTxt: {
        fontSize: hp(1.8),
        color: '#fff'
    },
    title: {
        fontSize: hp(2),
        fontWeight: 'bold',
        color: '#000',
        marginTop: hp(2),
        marginBottom: hp(1)
    }
})

export default styles;