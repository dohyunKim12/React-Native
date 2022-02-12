import React from 'react';
import {View, Text} from 'react-native';

const PropsChild = props => {
  return <Text onPress={props.cState}>{props.sText}</Text>;
};

export default PropsChild;
