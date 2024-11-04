import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserCard({ name, role }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>Rol: {role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#666',
  },
});
