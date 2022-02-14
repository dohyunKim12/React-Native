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

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        {/* 첫번째 중괄호는 jsx를, 두번째 중괄호는 객체를 담음. */}
        <View style={styles.subView}>
          {/* View는 다른 component들을 감싸주는 역할. */}
          <Text style={styles.mainText}>Hello World!</Text>
        </View>
        <View style={styles.subView}>
          <Text>Hello World!</Text>
        </View>
        <View style={styles.anotherSubView}>
          <Text style={styles.mainText}>Hello World!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'green',
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
    flex: 1,
    width: '40%',
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    padding: 30,
  },
});

export default App;
