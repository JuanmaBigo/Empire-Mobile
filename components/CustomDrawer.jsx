import React, { useState, useEffect } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import drawerActions from '../store/Drawer/actions.js';
import Spinner from 'react-native-loading-spinner-overlay';


import {REACT_APP_URL} from '@env'
const { reloadDrawer } = drawerActions


const CustomDrawer = (props) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    let state = useSelector(store => store.drawerReducer.state)

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(res => {
                setUser(JSON.parse(res));
            })

        AsyncStorage.getItem('token')
            .then(res => {
                setToken(res);
            })
    }, []);


    async function handleSignOut() {
        setLoading(true)
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = REACT_APP_URL + 'auth/signout'
        try {
            await axios.post(url, null, headers)
                .then(res => {
                    AsyncStorage.setItem('token', '');
                    AsyncStorage.setItem('user', JSON.stringify({
                        name: '',
                        mail: '',
                        photo: ''
                    }))
                })
                setLoading(false)
                dispatch(reloadDrawer({ state: !state }))
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingVertical: 50, backgroundColor: 'black' }}>
                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 10}}>
                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: 500 }}>{token ? user.name : 'Username'}</Text>
                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: 400 }}>{token ? user.mail : 'email'}</Text>
                </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            {token ? <View>
                <TouchableOpacity onPress={handleSignOut} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, gap: 10, alignSelf: 'center' }}>
                    <Ionicons name="log-out-outline" size={30} color="#fff"/><Text style={{ color: '#fff', fontSize: 15, fontWeight: 400, marginRight: 15 }}>SIGN OUT</Text>
                </TouchableOpacity>
            </View> : ''}
            <Spinner visible={loading} />
        </View>
    )
}

export default CustomDrawer