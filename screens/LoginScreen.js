import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, ImageBackgroundBase, Image, Pressable, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 
import Header from '../components/Header'

const loginBg = require('../imgs/login_bg.png')


const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={loginBg} resizeMode="contain" style={styles.backgroundContainer}>
                <View style={styles.title}>
                    <Header />
                </View>
                <View style={styles.inputBarContainer}>
                    <View>
                        <Text style={{ fontSize: 30, fontWeight: '500', marginBottom: 30}}>
                            Hey There!
                        </Text>
                    </View>
                    <TextInput 
                        placeholder='Email'
                        style={styles.inputBar}
                    />
                    <TextInput 
                        placeholder='Password'
                        placeholderStyle={{fontSize: 20}}
                        style={styles.inputBar}
                    />
                    <View style={{alignItems: 'flex-end',}}>
                        <Text style={{textDecorationLine: 'underline'}}>Forgot Password?</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Pressable 
                            onPress={() => navigation.navigate('Home')}
                            style={styles.buttonContainer}
                        >
                            <Text style={{fontWeight: '800'}}>Let's go!</Text>
                        </Pressable>
                    </View>
                </View>
                
                <View style={{ alignItems: 'center', flex: 0.5, marginBottom: 50}}>
                    <Pressable 
                        onPress={() => navigation.navigate('SignUp')}
                        style={styles.buttonContainer}
                    >
                        <Text style={{fontWeight: '800', textDecorationLine: 'underline'}}>New User?</Text>
                    </Pressable>
                    <Pressable 
                        onPress={() => navigation.navigate('Home')}
                        style={styles.buttonContainer}
                    >
                        <Text style={{ fontWeight: '800', textDecorationLine: 'underline' }}>Continue as Guest</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundContainer: {
        flex: 1,
        // marginHorizontal: 15,
        paddingHorizontal: 15,
    },
    title: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",  
    },
    inputBarContainer: {
        margin: 35,
        flex: 1
        
    },
    inputBar: {
        padding: 10,
        // marginHorizontal: 12,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#F5D7FF',
        borderColor: '#F5D7FF'

    },
    buttonContainer: {
        backgroundColor: "#D7E0FF",
        borderRadius: 100,
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderColor: "#D7E0FF",
        marginTop: 20,
    }
});

export default LoginScreen