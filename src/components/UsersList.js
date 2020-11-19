import _default from 'expo/build/DangerZone';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserListItem from './UserListItem';

const UsersList = props => {

    const { users } = props;

    const items = users.map(user =>{
        return <UserListItem key={user.name.first} user={user} />
    })

    return (
        <View style={styles.container}>
            { items }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffaa55'
    },
})

export default UsersList;