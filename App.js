/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {green, yellow} from 'color-name';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';

class App extends Component {
  state = {
    appName: 'My First App',
  };

  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.appName} /> */}
        <Text
          style={styles.mainText}
          onPress={() => alert('text touch event!')}>
          Blah Blah
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    padingTop: 50, //padingTOp과 marginTop은 View 내부냐 외부냐의 차이.
    // 모든 component는 전부 정수만 받음.
    // height: '100%',
    flex: 1, //weight같은 속성.
    alignItems: 'center', //수평정렬
    justifyContent: 'center', //수직정렬
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 20,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 30,
  },
});

export default App;
