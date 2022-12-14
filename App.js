import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import BrowseScreen from './screens/BrowseScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import RecipeSelectionScreen from './screens/RecipeSelectionScreen';
import RecipeScreen from './screens/RecipeScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Browse" 
          component={BrowseScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Recipe Selection" 
          component={RecipeSelectionScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Recipe Screen" 
          component={RecipeScreen} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




// const styles = StyleSheet.create({

// });
