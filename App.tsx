import { SafeAreaView, StyleSheet } from 'react-native';
import TelaConversas from './src/screens/TelaConversas';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <TelaConversas />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})