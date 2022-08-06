import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native';
import Header from '../components/Header'

const image = require('../imgs/home_screen.png');

const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Header />
            </View>
            <View style={styles.image}>
                <Image 
                    style={{
                    width: '100%', height: '100%', resizeMode: 'contain'
                    }}
                    source={require('../imgs/home_screen.png')}
                />
            </View>
            <View style={styles.desc}>
                <Text style={{ fontSize: 30, marginBottom: 15, fontWeight: '500'}}>
                    We're here to make meal planning easier for you.
                </Text>
                <Text style={{ fontSize: 20}}>  
                    Start today by uploading your own recipes that you want to make and plan your weeks out !!
                </Text>
            </View>

            <View style={styles.button}>
                <Pressable style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    borderRadius: 30,
                    elevation: 3,
                    backgroundColor: '#D7E0FF',
                    width: '80%'
                }}
                    onPress={() => 
                        navigation.navigate('Login')
                    }
                >
                    <Text style={{
                    fontSize: 16,
                    lineHeight: 21,
                    fontWeight: 'bold',
                    letterSpacing: 0.25,
                    color: '#4147D5',
                    }}>
                    JOIN US TODAY
                    </Text>
                </Pressable>
            </View>

            {/* <StatusBar style="auto" /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    title: {
      flex: 0.6,
      justifyContent: "center",
      alignItems: "center"
    },
    image: {
      flex: 1.2,
      
    },
    desc: {
      flex: 1.2,
      // justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 40,
      marginTop: 50
    },
    button: {
      flex: 1,
      alignItems: 'center'
    },
  
});

export default WelcomeScreen