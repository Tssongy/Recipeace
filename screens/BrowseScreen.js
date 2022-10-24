import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableHighlight, Image, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { browseImgArray } from '../data/data';

const browseBg = require('../imgs/browse_bg.png')

const BrowseScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={browseBg} resizeMode="contain" style={styles.backgroundImg}>
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
                    <View style={styles.cardContainer}>
                        {browseImgArray.map((browseImg, index) => (
                            <View key={index} style={styles.cardBox}>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate("Recipe Selection", {
                                    selectionName: browseImg.name
                                })}>
                                    <Image 
                                        style={styles.card}
                                        source={browseImg.uri}
                                    />
                                </TouchableWithoutFeedback>
                                <Text style={styles.descText}>{browseImg.name}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </ImageBackground>
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
    backgroundImg: {
        justifyContent: 'flex-end'
    },
    title: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",  
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    cardBox: {
        // backgroundColor: 'white',
        // shadowColor: 'black',
        // shadowOffset: {width: -4, height: 4},
        // shadowOpacity: 0.5,
        // shadowRadius: 10,
        elevation: 5,
        borderRadius: 30,
        width: '45%',
        height: 135,
        marginVertical: 30,
        alignItems: 'center'
    },
    card: {
        borderRadius: 30,
        width: "100%",
        height: "100%",
        // resizeMode: 'center',
        
    },
    descText: {
        fontSize: 20,
        fontWeight: '500',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
    }
});

export default BrowseScreen