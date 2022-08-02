import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TextInput, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const introRecipe = require('../imgs/start_recipe.png');
const popular = require('../imgs/popular.jpg')
const add = require('../imgs/add.png')
const list = require('../imgs/list.png')
const features = require('../imgs/features.png')
const bookmark = require('../imgs/bookmark.png')
const profile = require('../imgs/profile.png')
const recent = require('../imgs/recent.png')
const browse = require('../imgs/browse.png')



const HomeScreen = () => {
    return (
        // <SafeAreaView>
        //     <ScrollView> 
        //         {/* <View>
        //             <Text style={{
        //                 fontSize: 50,
        //                 color: '#4147D5',
        //                 fontWeight: '500'
        //             }}>
        //                 Recipeace
        //             </Text>
        //         </View>
        //         <View style={styles.notification}>
        //             <Text style={{fontSize: 20}}>
        //                Hi Friend,{'\n'} What are we having today?
        //             </Text>
        //             <MaterialCommunityIcons name="bell-badge-outline" size={40} color="black" />
        //        </View> */}
        //        <Image 
        //             style={{
        //                 // width: '50%', height: '50%', resizeMode: 'contain',
        //                 marginHorizontal: 10,
        //             }}
        //             source={popular}
        //         />
        //     </ScrollView>
        // </SafeAreaView>
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={{ marginHorizontal: 10, alignItems: 'center'}}
            >
                <View style={styles.title}>
                    <Text style={{
                        fontSize: 50,
                        color: '#4147D5',
                        fontWeight: '500',
                    }}>
                        Recipeace
                    </Text>
                </View>
                <View style={styles.notification}>
                    <Text style={{fontSize: 20}}>
                        Hi Friend,{'\n'}What are we having today?
                    </Text>
                    <MaterialCommunityIcons name="bell-badge-outline" size={40} color="black" />
                </View>
                <View style={{ padding: 10}}>
                    <Image 
                        style={styles.card}
                        source={introRecipe}
                    />
                </View>
                <View style={{ padding: 10}}>
                    <TextInput 
                        style={styles.searchBar}
                        placeholder='Search Recipes or ingredients...'
                    />
                </View>
                <View style={styles.options}>
                    <Text>
                        Let's get cookin'!
                    </Text>
                    <Image 
                        style={styles.card}
                        source={popular}
                    />
                    <Text>
                        Popular
                    </Text>
                    <Image 
                        style={styles.card}
                        source={recent}
                    />
                    <Text>
                        Recently Added
                    </Text>
                    <Image 
                        style={styles.card}
                        source={browse}
                    /> 
                    <Text>
                        Browse Cuisines
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.menu}>
                <View>
                    <Image 
                    style={styles.icons}
                    source={add}/>
                    <Text>Quick add</Text>
                </View>
                <View>
                    <Image 
                    style={styles.icons}
                    source={list}/>
                    <Text>Shopping List</Text>
                </View>
                <View>
                    <Image 
                    style={styles.icons}
                    source={features}/>
                    <Text>Features</Text>
                </View>
                <View>
                    <Image 
                    style={styles.icons}
                    source={bookmark}/>
                    <Text>Bookmarked</Text>
                </View>
                <View>
                    <Image 
                    style={styles.icons}
                    source={profile}/>
                    <Text>My Profile</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAEBF6',
      marginTop: 40
    },
    title: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
      padding: 10
      
    },
    notification: {
        // flex:0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10

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
        padding: 10
        
    },
    card: {
        borderRadius: 30,
        
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '8%',
        marginBottom: 5,
        paddingTop: 10
    },
    icons: {
        flex: 0.7,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
});

export default HomeScreen