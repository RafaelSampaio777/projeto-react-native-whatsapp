import { StatusBar } from 'react-native';
import Nav from '../../components/Nav';
import Conversas from '../../components/Conversas';

export default function TelaConversas() {

  return (
    <>
      <StatusBar backgroundColor={'#04856D'} />
      <Nav />
      <Conversas />
    </>
  );
}