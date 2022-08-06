import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const add = require('../imgs/add.png')
const list = require('../imgs/list.png')
const features = require('../imgs/features.png')
const bookmark = require('../imgs/bookmark.png')
const profile = require('../imgs/profile.png')

const NavBar = () => {
    return (
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
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '8%',
        marginBottom: 5,
        paddingTop: 10,
    },
    icons: {
        flex: 0.7,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
});

export default NavBar