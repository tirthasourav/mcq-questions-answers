import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Answers from '../../components/answers/Answers';

class ResultScreen extends Component {
  constructor(props) {
    super(props);
  }

  onBackPressed = () => {
    this.props.navigation.goBack();
  };

  render() {
    const answers = this.props.route.params.answers;
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Answers
            answersData={answers}
            onBackPressed={() => this.onBackPressed()}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
