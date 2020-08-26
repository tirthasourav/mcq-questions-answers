import {StyleSheet} from 'react-native';
import COLORS from '../../res/Colors';

export const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  radioText: {
    marginLeft: 5,
    fontSize: 14,
    color: COLORS.MEDIUM_GREY,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: COLORS.INDIAN_RED,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: COLORS.FOREST_GREEN,
    marginHorizontal: 5,
  },
  verticalOrientation: {
    flexDirection: 'column',
  },
  horizontalOrientation: {
    flexDirection: 'row',
  },
});
