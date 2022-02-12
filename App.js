import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropsChild from './Props';

class App extends Component {
  state = {
    sampleText: 'Hello World', //Hello World를 직접 출력하는 것이 아니라,
    // state를 활용하여 변수처럼 사용. (data의 재사용성 등 효율적인 선택.)
    sampleBoolean: false,
    sampleNum: 1,
  };

  // inputText() {
  //   this.state.sampleBoolean ? (
  //     <Text>sampleBool is True</Text>
  //   ) : (
  //     <Text>SampleBool is False</Text>
  //   );
  // }   // doesn't work.

  inputText = () =>
    // console.log('fuck');
    this.state.sampleBoolean ? (
      <Text>sampleBool is True</Text>
    ) : (
      <Text>SampleBool is False</Text>
    );

  changeState = () =>
    this.state.sampleBoolean
      ? this.setState({
          sampleText: 'fuck',
          sampleBoolean: false,
        })
      : this.setState({
          sampleText: 'What the fork?',
          sampleBoolean: true,
        });

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1,
      };
    });
  };

  render() {
    return (
      <View style={styles.background}>
        <PropsChild // 부모가 가진 data (sampleText, changeState)를 자식에게 간편히 전달하기 위해 props를 사용.
          sText={this.state.sampleText}
          cState={this.changeState}
        />
        {this.inputText()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
