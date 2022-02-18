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
    appName: 'Killer App',
    random: [36, 999],
  };

  onAddRandomNum = () => {
    const randNum = Math.floor(Math.random() * 100);
    //0~1 사이의 임의 소수 발생시키고 * 100 후 소수점 버림.
    this.setState(prevState => {
      return {
        random: [...prevState.random, randNum],
      };
    });
  };

  onNumDelete = position => {
    const newArray = this.state.random.filter(
      // filter라는 배열의 내장함수는 function의 반환값을 가지고 해당 조건을 만족할 때에만
      // 새로운 배열을 만들어서 반환함.
      function (num, index) {
        return position != index;
      },
      // 삭제하려는 인덱스(position)과 원래 배열의 index들을 비교해서,
      // position과 같지 않은 index들 (position을 제외한 나머지 인덱스들) 만을 가지고
      // 새로운 배열을 만들겠다 라는 뜻.
    );
    const newArray2 = this.state.random;
    newArray2[position] = '🤡';

    this.setState({
      // random: newArray,
      random: newArray2,
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
            Connect;in
          </Text>
        </View>
        <Generator add={this.onAddRandomNum} />
        <NumList num={this.state.random} delete={this.onNumDelete} />
        {/* Generator에서 number를 생성시키고, numList는 랜덤 number들을 View에 */}
        {/* 띄운다. (터치하면 삭제되는 기능까지 구현.) */}
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
    fontSize: 23,
    fontWeight: 'normal',
    color: 'red',
    padding: 30,
    marginVertical: 10,
  },
});

export default App;
