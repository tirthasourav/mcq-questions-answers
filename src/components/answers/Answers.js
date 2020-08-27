import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FooterButton from '../footer/FooterButton';
import styles from './AnswersStyles';
import COLORS from '../../res/Colors';

const Answers = ({answersData, onBackPressed}) => {
  return (
    <FlatList
      data={answersData}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled
      renderItem={({item}) => (
        <View style={styles.container}>
          <Text style={styles.questionText}>
            {item.id}. {item.question}
          </Text>
          <View style={styles.answerContainer}>
            <Text style={styles.answerTitle}>Your Answer: </Text>

            {item.given_answer_value !== undefined ? (
              <View style={styles.iconContainer}>
                <Icon
                  name={
                    item.given_answer_value === item.correct_answer
                      ? 'check-circle'
                      : 'times-circle'
                  }
                  size={20}
                  color={
                    item.given_answer_value === item.correct_answer
                      ? COLORS.FOREST_GREEN
                      : COLORS.INDIAN_RED
                  }
                />
              </View>
            ) : null}
            {item.given_answer_value !== undefined ? (
              <Text style={styles.answerText}>{item.given_answer_value}</Text>
            ) : (
              <Text style={styles.noAnswerText}>
                You Have Not Answered This Question
              </Text>
            )}
          </View>
          {item.given_answer_value !== item.correct_answer ? (
            <View style={styles.answerContainer}>
              <Text style={styles.answerTitle}>Correct Answer:</Text>
              <Text style={styles.answerText}>{item.correct_answer}</Text>
            </View>
          ) : null}
        </View>
      )}
      ListFooterComponent={
        <FooterButton onPress={onBackPressed} title="RETRY" />
      }
    />
  );
};

export default Answers;
