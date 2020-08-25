import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  radioText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#000',
    textAlign: 'left',
    // fontWeight: 'Bold'
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: '#3740ff',
    marginHorizontal: 5,
  },
  verticalOrientation: {
    flexDirection: 'column',
  },
  horizontalOrientation: {
    flexDirection: 'row',
  },
});
