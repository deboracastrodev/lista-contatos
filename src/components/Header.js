import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const Header = props => (
    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
    </View>
);

/* StyleSheet */
const style = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#ff550f',
    
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 40,
        color: '#fff'
    }
})

export default Header;