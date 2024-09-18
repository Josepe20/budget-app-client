import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '@/modules/AUTH/users/user.hook';
import { useRouter } from 'expo-router';
import { useAppSelector } from '@/common/hooks/store';


export default function Dashboard() {
  const { handleLogout } = useAuth();
  const router = useRouter();
  const authData = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (authData.isAuthenticated) {
      router.push('/(budgetapp)/');
    } else {
      router.push('/(auth)/login')
    }
  }, [authData, router]);

  const onLogOut = () => {
    handleLogout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard</Text>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
