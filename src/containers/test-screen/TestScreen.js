import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Questions from '../../components/questions/Questions';
import QuestionsArray from '../../util/QuestionsArray';

const data = QuestionsArray;

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
    };
  }

  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'focus',
      () => {
        this.getData();
      },
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }

  getData = () => {
    //create a copy of original array
    const qData = data.map((_arrayElement) => Object.assign({}, _arrayElement));
    this.setState({questionData: qData});
  };

  onSubmitPressed = () => {
    //navifgate to next screen to show result
    this.props.navigation.navigate('RESULT', {
      answers: this.state.questionData,
    });
  };

  onSelectedAnswer = (answer_key, answer_value, question) => {
    const question_id = question.id;

    //creating a copy of question array from current state
    const newArray = this.state.questionData.map((_arrayElement) =>
      Object.assign({}, _arrayElement),
    );

    //push  key-value pairs of answers given by user to the existing questions array
    newArray[question_id - 1].given_answer_key = answer_key;
    newArray[question_id - 1].given_answer_value = answer_value;

    //update the state with modified questions array
    this.setState({questionData: newArray});
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Questions
            questionData={this.state.questionData}
            onSelected={this.onSelectedAnswer}
            onSubmitPressed={() => this.onSubmitPressed()}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
});
