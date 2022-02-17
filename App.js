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
import Generator from './src/generator';
import NumList from './src/numlist';

class App extends Component {
  state = {
    appName: 'My First App',
    random: [36, 999],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100);
    //0~1 사이의 임의 소수 발생시키고 * 100 후 소수점 버림.
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum],
      };
    });
  };

  onNumDelete = position => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    });
    this.setState({
      random: newArray,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName} />
        <View>
          <Text
            style={styles.mainText}
            onPress={() => alert('text touch event!')}>
            Blah Blah
          </Text>
        </View>
        <Generator add={this.onAddRandomNum} />
        <NumList num={this.state.random} delete={this.onNumDelete} />
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
    // justifyContent: 'center', //수직정렬
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
