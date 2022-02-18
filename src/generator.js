/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Generator = props => {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={() => props.add()}></Button>
    </View>
  );
};

// const styles = StyleSheet.create({
//   generator: {
//     backgroundColor: '#D197CF',
//     alignItems: 'center',
//     padding: 5,
//     width: '100%',
//   },
// });

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 20,
    marginVertical: 5,
    width: '50%',
  },
});

export default Generator;
