/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NumList = props => {
  return props.num.map((item, idx) => (
    // <View style={styles.container}>
    <TouchableOpacity
      // react-native에서 touchableOpacity를 사용하는 이유 :
      // button은 android와 ios가 달라서 관리하는데 어려움이 있음.
      style={styles.numList}
      key={idx}
      onPress={() => props.delete(idx)}>
      <Text>{item}</Text>
    </TouchableOpacity>
    // {/* <TouchableOpacity
    //   // react-native에서 touchableOpacity를 사용하는 이유 :
    //   // button은 android와 ios가 달라서 관리하는데 어려움이 있음.
    //   style={styles.numList}
    //   key={idx}
    //   onPress={() => props.delete(idx)}>
    //   <Text>{item}</Text>
    // </TouchableOpacity>
    // <TouchableOpacity
    //   // react-native에서 touchableOpacity를 사용하는 이유 :
    //   // button은 android와 ios가 달라서 관리하는데 어려움이 있음.
    //   style={styles.numList}
    //   key={idx}
    //   onPress={() => props.delete(idx)}>
    //   <Text>{item}</Text>
    // </TouchableOpacity> */}
    // {/* 이렇게 TouchableOpacity 여러 개 만드는것은 Illegal. key값은 unique 해야 함.  */}
    //  </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  numList: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '10%',
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default NumList;
