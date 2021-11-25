import * as React from 'react';
import {View, Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useFonts, Lato_900Black} from '@expo-google-fonts/lato';
import styled, {ThemeProvider} from 'styled-components/native';
import {color, ColorProps} from 'styled-system';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
type Props = {
  navigation: HomeScreenNavigationProp
}

function HomeScreen({navigation}: Props) {
  return (
    <MyFirstView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    >
      <MyFirstText
        color="primary"
        style={{fontFamily: 'Lato_900Black', fontSize: 40}}
      >
        Lato Black
      </MyFirstText>
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
    Lato_900Black,
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

export const MyFirstText = styled.Text<ColorProps>(color);

export default App;
