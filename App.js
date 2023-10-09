import { View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from "./Styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Preview from './screens/Preview';
import Cart from './screens/Cart';
import Receipts from './screens/Receipts';

export default function App() {
  
  const [fontsLoaded, setfont] = useState(null);
  let customFonts = {
    kanit: require("./assets/fonts/kanit/Kanit-Bold.ttf"),
    KantumruyPro: require("./assets/fonts/Kantumruy/KantumruyPro-Regular.ttf"),
    KaushanScript: require(`./assets/fonts/KaushanScript/KaushanScript-Regular.ttf`),
    KeaniaOne: require(`./assets/fonts/Keania_One/KeaniaOne-Regular.ttf`),
  };
  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setfont(true);
  }
  useEffect(() => {
    loadFontsAsync();
  }, []);
  if (!fontsLoaded) {
    return null; //equivalent to returning the splashscreen
  }
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer> 
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} options={{title:'',headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{title:'',headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{title:'',headerShown: false, headerLeft: ()=> null,
            headerStyle: {
                backgroundColor: 'black',
             }}}/>
          <Stack.Screen name="Preview" component={Preview} options={{title:'',headerShown: false, headerLeft: ()=> null,
            headerStyle: {
                backgroundColor: 'black',
             }}}/>
          <Stack.Screen name="Cart" component={Cart} options={{title:'',headerShown: false, headerLeft: ()=> null,
            headerStyle: {
                backgroundColor: 'black',
             }}}/>
             <Stack.Screen name="Receipts" component={Receipts} options={{title:'',headerShown: false, headerLeft: ()=> null,
            headerStyle: {
                backgroundColor: 'black',
             }}}/>
        </Stack.Navigator>

        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
