import _default from 'expo/build/DangerZone';
import React from 'react';
import { View, Text } from 'react-native';

const UsersList = props => {

    const { users } = props;
    const textElements = users.map(user => {
        const { first } = user.name;
        return <Text key={ first }> { first } </Text>;
    });

    return (
        <View>
           { textElements }
        </View>
    )
};

export default UsersList;