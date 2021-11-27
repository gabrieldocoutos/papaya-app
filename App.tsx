/* eslint-disable camelcase */
import * as React from 'react';
import {View} from 'react-native';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';
import styled, {ThemeProvider} from 'styled-components/native';
import {Text} from 'shared/Text/TextComponent';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
type Props = {
  navigation: HomeScreenNavigationProp
}

function HomeScreen({navigation}: Props) {
  return (
    <MyFirstView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    >
      <Text
        color="primary"
        fontSize={72}
        fontFamily="Bold_Italic"
      >
        Lato Black
      </Text>
    </MyFirstView>
  );
}

function LoginScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
    </View>
  );
}

type RootStackParamList = {
  Home: undefined,
  Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={{colors: {primary: 'green'}}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const MyFirstView = styled.View({
  backgroundColor: 'red',
});


export default App;
