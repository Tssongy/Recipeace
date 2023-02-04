import * as React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
            <Text style={{
                    fontSize: 50,
                    color: '#4147D5',
                    fontWeight: '500',
                    textShadowColor: 'rgba(0, 0, 0, 0.2)',
                    textShadowOffset: { width: 1, height: 2 },
                    textShadowRadius: 10,
                }}>
                    Recipeace
            </Text>
        </TouchableWithoutFeedback>
    )
}

export default Header