import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView, TouchableHighlight, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 
import Header from '../components/Header'
import NavBar from '../components/NavBar';

const introRecipe = require('../imgs/start_recipe.png');
const popular = require('../imgs/popular.jpg')
const add = require('../imgs/add.png')
const list = require('../imgs/list.png')
const features = require('../imgs/features.png')
const bookmark = require('../imgs/bookmark.png')
const profile = require('../imgs/profile.png')
const recent = require('../imgs/recent.png')
const browse = require('../imgs/browse.png')

const RecipeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.title}>
                    <Header />
                </View>
                <View style={styles.filter}>
                    <TouchableHighlight onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color="#4147D5" />
                    </TouchableHighlight> 

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: "#4147D5" }}>Filter by</Text>
                        <AntDesign name="down" size={24} color="#4147D5" />
                    </View>
                </View>
                <View style={styles.cardBox}>
                    <Image
                        style={styles.card}
                        source={require('../imgs/popular.jpg')}
                    />
                </View>
            </ScrollView>
            <NavBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAEBF6',
    //   marginTop: 40
    },
    title: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",  
    //   marginHorizontal: 20
    },
    notification: {
        // flex:0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginHorizontal: 10
    },
    cardBox: {
        width: '100%',
        height: 300,
        marginVertical: 30,
        alignItems: 'center',
    },
    card: {
        // borderRadius: 30,
        width: "100%",
        height: "100%",
        // resizeMode: 'cover',
    },
    optionsText: {
        fontWeight: '500',
        fontSize: 20,
        margin: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
});

export default RecipeScreen