import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMenu from './src/components/HomeMenu';
import Register from './src/screens/Register';
import Login from './src/screens/Login'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="HomeMenu"
          component={HomeMenu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
