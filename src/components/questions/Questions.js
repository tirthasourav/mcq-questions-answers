import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// import {RadioButton} from 'rn-customizable-radio-button';
import QuestionsArray from '../../util/QuestionsArray';
import FooterButton from '../footer/FooterButton';
import RadioButton from '../radio-button/RadioButton';

const Questions = ({questionData, onSelected, onSubmitPressed}) => {
  return (
    <FlatList
      data={questionData}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled
      renderItem={({item}) => (
        <View
          style={{
            alignItems: 'flex-start',
            marginHorizontal: '2.5%',
            marginTop: 10,
          }}>
          <Text>
            {item.id}. {item.question}
          </Text>
          <RadioButton
            items={item.options}
            selectedKey={item.given_answer}
            onPress={(key) => onSelected(key, item)}
            orientation="vertical"
            buttonPosition="left"
            selectedButtonStyle={styles.selectedRb}
            buttonStyle={styles.radioCircle}
          />
        </View>
      )}
      ListFooterComponent={<FooterButton onPress={onSubmitPressed} />}
    />
  );
};

export default Questions;

const styles = StyleSheet.create({
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: 'lightgreen',
    marginHorizontal: 5,
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});
