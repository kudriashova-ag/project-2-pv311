import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import ThemeText from '../../components/ThemeText';
import ThemeView from '../../components/ThemeView';
import axios from 'axios';
import { Link } from 'expo-router';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if(loading) return <ActivityIndicator size="large" />
    
    return (
      <ThemeView style={{ flex: 1, padding: 20 }}>
        <Link href="/addUser" style={{ marginBottom: 20, color: "blue" }}>
          Add User
        </Link>

        <FlatList
          data={users}
          renderItem={({ item }) => <ThemeText>{item.name}</ThemeText>}
        />
        
      </ThemeView>
    );
}

const styles = StyleSheet.create({})

export default Users;
