import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Questions from '../../components/questions/Questions';
import QuestionsArray from '../../util/QuestionsArray';

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
    };
  }

  componentDidMount() {
    this.getData();
    // this.willFocusSubscription = this.props.navigation.addListener(
    //   'willFocus',
    //   () => {
    //     this.setState({questionData: QuestionsArray});
    //   },
    // );
  }

  // componentWillUnmount() {
  //   this.willFocusSubscription.remove();
  // }

  getData = () => {
    //Get data by calling api
    //store the received data to state
    const qArray = [...QuestionsArray];
    this.setState({questionData: qArray});
  };

  onSubmitPressed = () => {
    //navifgate to next screen to show result
    this.props.navigation.navigate('Result Screen', {
      answers: this.state.questionData,
    });
  };

  onSelectedAnswer = (answer_key, answer_value, question) => {
    const question_id = question.id;
    const newArray = [...this.state.questionData];

    //push  key-value pairs of answers given by user to the existing questions array
    newArray[question_id - 1].given_answer_key = answer_key;
    newArray[question_id - 1].given_answer_value = answer_value;

    //update the state with modified questions array
    this.setState({questionData: newArray});
  };

  render() {
    console.log(this.state.questionData);
    console.log(QuestionsArray);
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
