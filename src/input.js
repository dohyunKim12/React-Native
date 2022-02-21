/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Input extends Component {
  //state 활용할 것이여서 class 사용.
  state = {
    myTextInput: '',
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };
  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          // multiline={true} // 글자수 많아지면 자동 개행.
          maxLength={10} // 글자수 제한.
          autoCapitalize={'none'} // 자동 대문자 전환 방지.
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default Input;
