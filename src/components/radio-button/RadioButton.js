import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './RadioButtonStyles';

const RadioButton = ({
  items,
  onPress,
  selectedKey,
  orientation,
  selectedButtonStyle,
  buttonStyle,
  textStyle,
  buttonPosition,
}) => {
  return (
    <View
      style={
        orientation === 'vertical'
          ? styles.verticalOrientation
          : styles.horizontalOrientation
      }>
      {items.map((res) => {
        return buttonPosition === 'right' ? (
          <View key={res.key} style={styles.container}>
            <Text
              style={textStyle !== undefined ? textStyle : styles.radioText}>
              {res.value}
            </Text>
            <TouchableOpacity
              style={
                selectedKey === res.key
                  ? selectedButtonStyle !== undefined
                    ? selectedButtonStyle
                    : styles.selectedRb
                  : buttonStyle !== undefined
                  ? buttonStyle
                  : styles.radioCircle
              }
              onPress={() => onPress(res.key, res.value)}
            />
          </View>
        ) : (
          <View key={res.key} style={styles.container}>
            <TouchableOpacity
              style={
                selectedKey === res.key
                  ? selectedButtonStyle !== undefined
                    ? selectedButtonStyle
                    : styles.selectedRb
                  : buttonStyle !== undefined
                  ? buttonStyle
                  : styles.radioCircle
              }
              onPress={() => onPress(res.key, res.value)}
            />
            <Text
              style={textStyle !== undefined ? textStyle : styles.radioText}>
              {res.value}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
export default RadioButton;
