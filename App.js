import HomeScreen from "./screens/HomeScreen";
import SongScreen from "./screens/SongScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Spotify App',
          }}
        />
        <Stack.Screen
          name="Song"
          component={SongScreen}
          options={{
            title: 'SongScreen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  // return <HomeScreen />;

  // return <SongScreen />;
}
