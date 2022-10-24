import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 
import Header from '../components/Header'
import NavBar from '../components/NavBar'

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
            <ScrollView style={{ marginHorizontal: 20 }}>
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
    },
    notification: {
        // flex:0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginHorizontal: 10
    },
    searchBar: {
        padding: 10,
        marginHorizontal: 12,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#D7E0FF',
    },
    options: {
        // flex: 2,
        alignItems: 'center',
        padding: 10,
    },
    cardBox: {
        // backgroundColor: 'white',
        // shadowColor: 'black',
        // shadowOffset: {width: -2, height: 4},
        // shadowOpacity: 0.5,
        // shadowRadius: 3,
        elevation: 10,
        borderRadius: 30
    },
    card: {
        borderRadius: 30,
        width: 325,
        // resizeMode: 'contain',
        // margin: 10,
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
        alignItems: 'center'
    },
});

export default RecipeScreen