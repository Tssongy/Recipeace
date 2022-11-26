import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';


const add = require('../imgs/add.png')
const list = require('../imgs/list.png')
const features = require('../imgs/features.png')
const bookmark = require('../imgs/bookmark.png')
const profile = require('../imgs/profile.png')

const NavBar = () => {
    return (
        <View style={styles.menu}>
            <View style={{borderRadius: 20, flex: 1}}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000000', true)}>
                    <View style={{alignItems: 'center',}}>
                        <Image
                        style={styles.icon} 
                        source={add}/>
                        <Text style={styles.text}>Quick add</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            
            <View style={{borderRadius: 20, flex: 1, marginLeft: 20}}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000000', true)}>
                    <View style={{alignItems: 'center'}}>
                        <Image 
                        style={styles.icon} 
                        source={list}/>
                        <Text style={styles.text}>List</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={{borderRadius: 20, flex: 1, marginLeft: 20}}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000000', true)}>
                    <View style={{alignItems: 'center'}}>
                        <Image 
                        style={styles.icon} 
                        source={features}/>
                        <Text style={styles.text}>Features</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={{borderRadius: 20, flex: 1, marginLeft: 20}}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000000', true)}>
                    <View style={{alignItems: 'center'}}>
                        <Image 
                        style={styles.icon} 
                        source={bookmark}/>
                        <Text style={styles.text}>Bookmark</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={{borderRadius: 20, flex: 1, marginLeft: 20,}}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000000', true)}>
                    <View style={{alignItems: 'center'}}>
                        <Image 
                        style={styles.icon} 
                        source={profile}/>
                        <Text style={styles.text}>My Profile</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        height: '8%',
        marginBottom: 0,
        paddingTop: 10,
        marginHorizontal: 20,
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 10
    }
});

export default NavBar