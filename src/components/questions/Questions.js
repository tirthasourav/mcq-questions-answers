import React from 'react';
import {View, Text, FlatList} from 'react-native';
import FooterButton from '../footer/FooterButton';
import RadioButton from '../radio-button/RadioButton';
import styles from './QuestionsStyles';

const Questions = ({questionData, onSelected, onSubmitPressed}) => {
  return (
    <FlatList
      data={questionData}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled
      renderItem={({item}) => (
        <View style={styles.container}>
          <Text style={styles.questionText}>
            {item.id}. {item.question}
          </Text>
          <View style={styles.radioContainer}>
            <RadioButton
              items={item.options}
              selectedKey={item.given_answer_key}
              onPress={(key, value) => onSelected(key, value, item)}
              orientation="vertical"
              buttonPosition="left"
            />
          </View>
        </View>
      )}
      ListFooterComponent={
        <FooterButton onPress={onSubmitPressed} title="SUBMIT" />
      }
    />
  );
};

export default Questions;
