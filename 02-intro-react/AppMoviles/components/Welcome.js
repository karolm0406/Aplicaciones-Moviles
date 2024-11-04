import React from 'react';
import { Text } from 'react-native';

export default function Welcome({ name }) {
  return <Text style={{ fontSize: 18, marginVertical: 5 }}>Hola, {name}!</Text>;
}
