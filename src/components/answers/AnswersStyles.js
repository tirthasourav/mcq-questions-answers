import {StyleSheet} from 'react-native';
import COLORS from '../../res/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: '2.5%',
    marginTop: 20,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.DARK_GREY,
  },
  answerContainer: {
    width: '100%',
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  answerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.MEDIUM_GREY,
  },
  answerText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.MEDIUM_GREY,
    marginLeft: 8,
    marginRight: 2,
  },
  noAnswerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.INDIAN_RED,
    marginLeft: 5,
  },
});

export default styles;
