import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, ImageBackgroundBase, Image, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header'
import { authService } from '../fbase';

const SignUpScreen = ({ navigation }) => {
    const signupBg = require('../imgs/signup_bg.png')
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={signupBg} resizeMode="contain" style={styles.backgroundContainer}>
                <View style={styles.title}>
                    <Header />
                </View>
                <View style={styles.inputBarContainer}>
                    <View>
                        <Text style={{ fontSize: 30, fontWeight: '500', marginBottom: 30}}>
                            Welcome!
                        </Text>
                    </View> 
                    <TextInput 
                        placeholder='Your Name'
                        style={styles.inputBar}
                    />
                    <TextInput 
                        placeholder='Email'
                        placeholderStyle={{fontSize: 20}}
                        style={styles.inputBar}
                    />
                    <TextInput 
                        placeholder='Password'
                        placeholderStyle={{fontSize: 20}}
                        style={styles.inputBar}
                    />
                    <TextInput 
                        placeholder='Confirm Password'
                        placeholderStyle={{fontSize: 20}}
                        style={styles.inputBar}
                    />
                </View>
                
                <View style={{ alignItems: 'center', flex: 0.8, marginBottom: 50}}>
                    <Pressable 
                        onPress={() => navigation.navigate('Home')}
                        style={styles.buttonContainer}
                    >
                        <Text style={{fontWeight: '800', textDecorationLine: 'underline'}}>Show me the Recipes!</Text>
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
        backgroundColor: '#A1E2F0',
        borderColor: '#A1E2F0'

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

export default SignUpScreen