import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
};

const UserListItem = props => {
    const { user } = props;
    const { title, first, last } = user.name;

    return (
        <View style={styles.line} >
            <Text  style={styles.lineText}> 
                { `${ capitalizeFirstLetter(title) } ${first} ${last}` } 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#ffa',
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
    }
})

export default UserListItem;