import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import StyledButton from '../components/StyledButton';
 
export function Home() {
  const router = useRouter();
 
  const handleNavigateToLogin = () => {
    router.push('index');
  };
 
  return (
    <>
      <Text style={styles.successText}>Login com Sucesso!!</Text>
      <StyledButton title='Acessar o app' onPress={handleNavigateToLogin} />
    </>
  );
}
 
const styles = StyleSheet.create({
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});