import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledImage from '../components/StyledImage';
import { router } from 'expo-router';
 
export default function Home() {
  const handleLogin = () => {
    router.push('start');
  };
 
  return (
    <View style={styles.container}>
      <StyledImage  router='https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg'/>
     
 
      <StyledInput
        onChangeText={(texto) => console.log('Texto:', texto)}
        placeholder='Digite o seu e-mail: '
      />
 
      <StyledInput
        onChangeText={(texto) => console.log('Texto:', texto)}
        placeholder='Digite a sua senha: '
      />
 
      <StyledButton title='Acessar o app' onPress={handleLogin} />
 
      <StatusBar style='auto' />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
