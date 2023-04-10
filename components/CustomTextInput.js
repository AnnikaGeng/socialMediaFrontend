import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50, 
    position: 'relative',
    marginTop: 30,
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -12,
    left: 25,
    padding: 5,
    zIndex: 50,
  },
  textInput: {
    flex: 1, 
    borderWidth: 2, 
    borderColor: "#071C03",
    justifyContent: 'flex-end',
    height: 44,
    borderRadius: 10,
    paddingHorizontal: 25,
  }
})

const CustomTextInput = ({ label, style, ...props}) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text>{label}</Text>
    </View>
    <TextInput 
    style={[styles.textInput, style]}
    placeholder={props.placeholder}
    onChange={props.onChangeEmail}
    value={props.value}
    secureTextEntry={props.secureTextEntry}
    />
  </View>
);

export default CustomTextInput;