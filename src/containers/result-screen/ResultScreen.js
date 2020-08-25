import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ResultScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const items = this.props.route.params;
    console.log('received props', items);
    return (
      <View>
        <Text>Result Screen</Text>
      </View>
    );
  }
}

export default ResultScreen;
