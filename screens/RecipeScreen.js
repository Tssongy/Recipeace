import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView, TouchableHighlight, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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

const rating = 4;

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
                    <Text style={styles.subHeading}>Korean Beef Kimbap</Text>
                </View>
                <View style={styles.cardBox}>
                    <Image
                        style={styles.card}
                        source={require('../imgs/popular.jpg')}
                    />
                </View>
                <View style={{ justifyContent: 'space-evenly', alignContent: 'space-between' }}>
                    <View style={styles.ratingAndBookmark}>
                        <View style={{flexDirection: 'row', alignItems: 'center',}}>
                            {Array.from({length: rating}, (_, index) => 
                            <MaterialIcons key={index} name="star-rate" size={20} color="#4147D5" />
                            )}
                            <Text style={{fontSize: 20, color: '#4147D5', textDecorationLine: 'underline'}}>{rating}.0</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Bookmark?</Text>
                            <MaterialIcons name="bookmarks" size={20} color="black" />
                        </View>
                    </View>
                    <View style={styles.recipeInfo}>
                        <View style={{alignItems:'center', flex: 1}}>
                            <Text style={{color: '#4147D5'}}>Servings</Text>
                            <Text>4-6</Text>
                        </View>
                        <View style={{alignItems:'center', flex: 1, borderLeftWidth: 1, borderRightWidth: 1, borderLeftColor: '#4147D5', borderRightColor: '#4147D5'}}>
                            <Text style={{color: '#4147D5'}}>Prep Time</Text>
                            <Text>30 mins</Text>
                        </View>
                        <View style={{alignItems:'center', flex: 1}}>
                            <Text style={{color: '#4147D5'}}>Total Time</Text>
                            <Text>45 mins</Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text>Insert Tags here</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <View style={{ backgroundColor: '#D7E0FF', width: '100%', paddingHorizontal: 30, paddingVertical: 30}}>
                        <Text style={{ alignSelf: 'center', fontSize: 30, marginBottom: 10 }}>INGREDIENTS</Text>
                        <Text>{`\u2022`} 6-7 sheets dried laver seaweed</Text>
                        <Text>{`\u2022`} 1 bag (9 oz. -10 oz.) ready to use spinach</Text>
                        <Text>{`\u2022`} 1 log of yellow pickled radish, or “danmuji”</Text>
                        <Text>{`\u2022`} 1 large carrot, or 2 medium sized carrots, peeled</Text>
                        <Text>{`\u2022`} 5 eggs</Text>
                        <Text>{`\u2022`} kosher salt, divided</Text>
                        <Text>{`\u2022`} sesame oil, divided</Text>
                        <Text>{`\u2022`} olive oil, divided</Text>
                        <Text>{`\u2022`} roasted sesame seeds, divided</Text>
                        <Text>{`\u2022`} 1 lb. (0.4 kg) ground beef</Text>
                        <Text>{`\u2022`} 2 cloves garlic, finely minced</Text>
                        <Text>{`\u2022`} 3 tablespoons soy sauce</Text>
                        <Text>{`\u2022`} 2 tablespoons sugar</Text>
                        <Text>{`\u2022`} 2 teaspoons sesame oil</Text>
                    </View>
                    <View style={{ width: '100%', paddingHorizontal: 30, paddingBottom: 30, paddingVertical: 30 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 30, marginBottom: 10 }}>INSTRUCTIONS</Text>
                        <Text>{`\u2022`} 6-7 sheets dried laver seaweed</Text>
                        <Text>{`\u2022`} 1 bag (9 oz. -10 oz.) ready to use spinach</Text>
                        <Text>{`\u2022`} 1 log of yellow pickled radish, or “danmuji”</Text>
                        <Text>{`\u2022`} 1 large carrot, or 2 medium sized carrots, peeled</Text>
                        <Text>{`\u2022`} 5 eggs</Text>
                        <Text>{`\u2022`} kosher salt, divided</Text>
                        <Text>{`\u2022`} sesame oil, divided</Text>
                        <Text>{`\u2022`} olive oil, divided</Text>
                        <Text>{`\u2022`} roasted sesame seeds, divided</Text>
                        <Text>{`\u2022`} 1 lb. (0.4 kg) ground beef</Text>
                        <Text>{`\u2022`} 2 cloves garlic, finely minced</Text>
                        <Text>{`\u2022`} 3 tablespoons soy sauce</Text>
                        <Text>{`\u2022`} 2 tablespoons sugar</Text>
                        <Text>{`\u2022`} 2 teaspoons sesame oil</Text>
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
        //   marginHorizontal: 20
    },
    subHeading: {
        // flex:0.2,
        marginHorizontal: 45,
        fontSize: 25,
        color: '#4147D5',
        fontWeight: '500',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
    },
    cardBox: {
        width: '100%',
        height: 200,
        marginVertical: 10,
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
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
    ratingAndBookmark: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    recipeInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    }
});

export default RecipeScreen