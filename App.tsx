import { SafeAreaView, StyleSheet } from 'react-native';
import { Routes } from './src/routes';
import { useFonts, OpenSans_700Bold, OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans'
//import AppLoading from "expo-app-loading";

export default function App() {

  const [fontsLoaded] = useFonts({
    "OpenSans": OpenSans_400Regular,
    "OpenSansSemiBold": OpenSans_600SemiBold,
    "OpenSansBold": OpenSans_700Bold
  })

  if (!fontsLoaded) {
    return <SafeAreaView />
  }

  return (
    <SafeAreaView style={styles.app}>
      {/*<TelaConversas />*/}
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})