import { StatusBar } from 'react-native';
import Nav from '../../components/Nav';
import Navegacao from '../../components/Navegacao';
import Conversas from '../../components/Conversas';

export default function TelaConversas() {
  return (
    <>
      <StatusBar backgroundColor={'#16914b'} />
      <Nav />
      <Navegacao conversas={true} />
      <Conversas />
    </>
  );
}