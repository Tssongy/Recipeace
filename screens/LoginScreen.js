import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, ImageBackgroundBase, Image, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header'
import { authService } from '../fbase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


const LoginScreen = ({ navigation }) => {
    const auth = getAuth();
    const loginBg = require('../imgs/login_bg.png');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("onAuthStateChanged triggered")
            if(user){
              navigation.replace('Home');
            }
        })
    }, [])

    const handleSignUp = async () => {
        try {
            const auth = getAuth();
            let data = await createUserWithEmailAndPassword(auth, email, password);
            console.log("## signup data: ", data);
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }

    const handleLogin = async () => {
        try {
            const auth = getAuth();
            let data = await signInWithEmailAndPassword(auth, email, password);
            console.log("## login data: ", data);
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={loginBg} resizeMode="contain" style={styles.backgroundContainer}>
                <View style={styles.title}>
                    <Header />
                </View>
                <View style={{ flex: 2.5 }}>
                    <ScrollView keyboardShouldPersistTaps='handled'>
                        <View style={styles.inputBarContainer}>
                            <View>
                                <Text style={{ fontSize: 30, fontWeight: '500', marginBottom: 30}}>
                                    Hey There!
                                </Text>
                            </View>
                            <TextInput
                                placeholder='Email'
                                value={email}
                                onChangeText={text => setEmail(text)}
                                style={styles.inputBar}
                            />
                            <TextInput
                                placeholder='Password'
                                value={password}
                                onChangeText={text => setPassword(text)}
                                placeholderStyle={{fontSize: 20}}
                                style={styles.inputBar}
                                secureTextEntry
                            />
                            <View style={{alignItems: 'flex-end',}}>
                                <Text style={{textDecorationLine: 'underline'}}>Forgot Password?</Text>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Pressable 
                                    // onPress={() => navigation.navigate('Home')}
                                    onPress={handleSignUp}
                                    style={styles.buttonContainer}
                                >
                                    <Text style={{fontWeight: '800'}}>Sign up</Text>
                                </Pressable>
                            </View>
                        </View>
                        
                        <View style={{ alignItems: 'center', flex: 0.5, marginBottom: 50}}>
                            <Pressable 
                                // onPress={() => navigation.navigate('SignUp')}
                                onPress={handleLogin}
                                style={styles.buttonContainer}
                            >
                                <Text style={{fontWeight: '800', textDecorationLine: 'underline'}}>Login</Text>
                            </Pressable>
                            <Pressable 
                                onPress={() => navigation.navigate('Home')}
                                style={styles.buttonContainer}
                            >
                                <Text style={{ fontWeight: '800', textDecorationLine: 'underline' }}>Continue as Guest</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
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