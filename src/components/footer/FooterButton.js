import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FooterButtonStyles';
import COLORS from '../../res/Colors';

const FooterButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {title === 'RETRY' ? (
        <Icon name="undo" size={20} color={COLORS.WHITE} />
      ) : null}
      <View style={styles.titleContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>

      {title === 'SUBMIT' ? (
        <Icon name="arrow-right" size={20} color={COLORS.WHITE} />
      ) : null}
    </TouchableOpacity>
  );
};

export default FooterButton;
