import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  state = {
    sampleText: 'Hello World', //Hello World를 직접 출력하는 것이 아니라,
    // state를 활용하여 변수처럼 사용. (data의 재사용성 등 효율적인 선택.)
    sampleBoolean: false,
    sampleNum: 1,
  };

  inputText = () =>
    //this.state.sampleText: 'Hi world!'; err! 화면을 다시 rendering 하지 않기때문에
    // 변경된 값이 화면에 반영되지 않음. state는 이런식으로 바꾸는게 아니다.
    // state는 쉽게 변경되면 안됨.
    this.state.sampleBoolean ? (
      <Text>sampleBool is True</Text>
    ) : (
      <Text>SampleBool is False</Text>
    );

  changeState = () =>
    this.state.sampleBoolean
      ? this.setState({
          //setState는 비동기성. 단일업데이트를 지원.
          //현재버전을 copy 한 후 update를 하게 됨.
          sampleText: 'fuck',
          sampleBoolean: false,
        })
      : this.setState({
          sampleText: 'What the fork?',
          sampleBoolean: true,
        });

  onAdd = () => {
    this.setState(prevState => {
      //sampleNum: sampleNum + 1,  -> this occur error!
      //setState로 data를 변경하기 위해서는 현재 version을 copy하고 업데이트를 진행함.
      // prevState 라는 현재 version의 state값을 setStat의 첫번째 인자로 넣어줌.
      return {
        sampleNum: prevState.sampleNum + 1,
      };
    });
  };

  render() {
    return (
      <View style={styles.background}>
        {/* <Text style={styles.text}>Hello World!!!!</Text> */}
        {/* <Text>{this.state.sampleText}</Text> */}
        {this.inputText()}
        <Text onPress={this.changeState}>{this.state.sampleText}</Text>
        {/* *** onPress 등의 이벤트에 오는 함수는 ()를 쓰지 않는다는 것을 명심할것. */}
        <Text onPress={this.onAdd}>{this.state.sampleNum}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
