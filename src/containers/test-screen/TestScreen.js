import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Questions from '../../components/questions/Questions';
import QuestionsArray from '../../util/QuestionsArray';

class TestScreen extends Component {
  constructor() {
    super();
    this.state = {
      questionData: QuestionsArray,
    };
  }

  onSubmitPressed = () => {
    this.props.navigation.navigate('Result Screen', {
      answers: this.state.questionData,
    });
  };

  onSelectedAnswer = (answer, question) => {
    const question_id = question.id;
    const newArray = QuestionsArray.slice();
    newArray[question_id - 1].given_answer = answer;
    this.setState({questionData: newArray});
  };

  render() {
    console.log('diff', QuestionsArray, this.state.questionData);
    return (
      <View
        style={{
          width: '100%',
          marginTop: 10,
        }}>
        <Questions
          questionData={this.state.questionData}
          onSelected={this.onSelectedAnswer}
          onSubmitPressed={() => this.onSubmitPressed()}
        />
      </View>
    );
  }
}

export default TestScreen;
