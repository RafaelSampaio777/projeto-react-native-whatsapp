import { StatusBar, FlatList } from 'react-native';
import Nav from '../../components/Nav';
import Conversa from "../../components/Conversa";
import useUsuarios from "../../hooks/useUsuarios";

type MyProps = {
  navigation: any
}

export default function TelaConversas({ navigation }: MyProps) {

  const [lista] = useUsuarios();

  const itensLista = ({ item }: any) => <Conversa {...item} onPress={() => {
    navigation.navigate('conversa', item)}} />

  return (
    <>
      <StatusBar backgroundColor={'#04856D'} />
      <Nav />
      <FlatList
        data={lista}
        renderItem={itensLista}
      />
    </>
  );
}