import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../src/hooks/useAuth';


export default function Dashboard() {
const { handleLogout } = useAuth();

  const onLogOut = () => {
    handleLogout();
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Dashboard</Text>
      <Button title="Logout" onPress={onLogOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
