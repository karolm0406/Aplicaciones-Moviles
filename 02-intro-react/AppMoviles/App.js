import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Welcome from './components/Welcome';
import UserCard from './components/UserCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App de Ejemplo</Text>
      <Welcome name="Sara" />
      <UserCard name="Juan" role="Desarrollador" />
      <UserCard name="Ana" role="Diseñadora" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
