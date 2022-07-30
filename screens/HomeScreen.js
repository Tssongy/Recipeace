import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native';
const image = require('../imgs/home_screen.png');

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={{
                    fontSize: 50,
                    color: '#4147D5',
                    fontWeight: '500'
                }}>
                    Recipeace
                </Text>
            </View>
            <View styles={styles.notification}>
                <Text>
                    Hi Friend, What are we having today?
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    title: {
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center"
    },
    notification: {
        flex:0.2,
        flexDirection: 'row',

    }
  
});

export default HomeScreen