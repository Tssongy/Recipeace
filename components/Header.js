import * as React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    return (
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
    )
}

export default Header