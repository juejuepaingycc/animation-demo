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
      borderRadius: hp(2),
      backgroundColor: 'red',
      marginTop: hp(5),
  },
})

export default styles;