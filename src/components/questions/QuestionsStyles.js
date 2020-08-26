import {StyleSheet} from 'react-native';
import COLORS from '../../res/Colors';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignItems: 'flex-start',
    marginTop: 10,
    alignSelf: 'center',
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.DARK_GREY,
  },
  radioContainer: {
    width: '100%',
  },
});

export default styles;
