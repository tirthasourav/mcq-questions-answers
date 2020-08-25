import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../../res/Colors';

const FooterButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: '75%',
        height: 35,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.PRIMARY_COLOR,
        alignSelf: 'center',
      }}
      onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  );
};

export default FooterButton;
