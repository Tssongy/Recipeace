import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableHighlight, Image, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { browseImgArray } from '../data/data';

const RecipeSelectionScreen = ({ route, navigation }) => {
    const { selectionName } = route.params 
    const selectedCuisine = require('../imgs/korean.png')

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
                <View style={styles.cardContainer}>
                    {/* Map below when API/data are available */}
                    <View style={styles.cardBox}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("Recipe Screen")}>
                            <ImageBackground 
                                style={styles.card}
                                source={selectedCuisine}
                                imageStyle={{ borderRadius: 30}}
                            >
                                <View style={{ position: 'absolute', right: 15, top: 10, opacity: 0.9 }}>
                                    <AntDesign name="heart" size={24} color="white"/>
                                </View>
                            </ImageBackground>
                        </TouchableWithoutFeedback>
                        <Text style={styles.descText}>Korean Beef Kimbap</Text>
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
        marginHorizontal: 20,
        
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
        height: 180,
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
        fontSize: 15,
        fontWeight: '500',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
    }
});

export default RecipeSelectionScreen