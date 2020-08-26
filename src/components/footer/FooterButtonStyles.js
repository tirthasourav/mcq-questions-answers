import {StyleSheet} from 'react-native';
import COLORS from '../../res/Colors';

const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: 35,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY_COLOR,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  titleContainer: {
    marginHorizontal: 20,
  },
});

export default styles;
