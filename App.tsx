import { SafeAreaView, StatusBar } from 'react-native';
import Nav from './src/components/Nav';
import Navegacao from './src/components/Navegacao';
import Conversas from './src/components/Conversas';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#16914b'} />
      <Nav />
      <Navegacao conversas={true} />
      <Conversas />
    </SafeAreaView>
  );
}