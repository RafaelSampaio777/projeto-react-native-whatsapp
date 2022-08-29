import { StatusBar } from 'react-native';
import HeaderChat from '../../components/HeaderChat';
import { useRoute } from '@react-navigation/native';

export default function Chat() {

  const route = useRoute();

  const {nome, imagem, id}: any = route.params

  return (
    <>
      <StatusBar backgroundColor={'#04856D'} />
      <HeaderChat nome={nome} imagem={imagem} id={id} />
    </>
  );
}