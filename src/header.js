/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

// exampleFunction = () => {

// }  -> 이 경우, return하는 jsx 컴포넌트가 없음.

// exampleFunction = () => (

// )  -> 이 경우, jsx 컴포넌트를 return하게 됨.

const Header = props => (
  <TouchableOpacity
    style={styles.header}
    onPress={() => alert('shortPress!')}
    onLongPress={() => alert('hello!')}
    onPressIn={() => alert('act immediately')}
    onPressOut={() => alert('hand off!')}>
    <View>
      <Text>{props.name}! This is Header</Text>
    </View>
  </TouchableOpacity>
); // Header라는 함수는 View라는 jsx 컴포넌트를 return하기 때문에 소괄호를 사용하였음.

// const Header = props => (
//   <TouchableWithoutFeedback onPress={() => alert('hello world!')}>
//     <View style={styles.header}>
//       <Text>{props.name}</Text>
//     </View>
//   </TouchableWithoutFeedback>
// );

// ***소괄호를 사용한 Arrow function은 반환할 값으로 정의됨.***

// // Same as this.
// const Header = function () {
//   return (
//     <View style={styles.header}>
//       <Text>This is fuckin Header</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
