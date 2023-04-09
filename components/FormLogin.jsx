import React, { useState } from 'react';
import { Image, ImageBackground, TextInput, TouchableOpacity, View, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import drawerActions from '../store/Drawer/actions.js';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import { REACT_APP_URL } from '@env'
import Ionicons from 'react-native-vector-icons/Ionicons';
import mangaActions from '../store/Mangas/actions';
const { read_mangas } = mangaActions
const { reloadDrawer } = drawerActions


import styles from './styles.js';
const { stylesFormLogin } = styles;


export default function App() {
    let styles = stylesFormLogin;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);

    const navigation = useNavigation()
    const dispatch = useDispatch()

    let state = useSelector(store => store.drawerReducer.state)

    async function handleLogin() {
        setLoading(true)
        let data = {
            mail: email,
            password: password
        };
        console.log(data);
        let url = REACT_APP_URL + 'auth/signin'
        console.log(url)
        console.log(data)
        try {
            await axios.post(url, data)
                .then(res => {
                    AsyncStorage.setItem('token', res.data.token);
                    AsyncStorage.setItem('user', JSON.stringify({
                        name: res.data.user.name,
                        mail: res.data.user.mail,
                    }))
                })
            dispatch(read_mangas({ inputText: '', inputPage: 1 }))
            setLoading(false)
            dispatch(reloadDrawer({ state: !state }))
        } catch (error) {
            setLoading(false)
            setAlert(true)
        }
    };

    function handleNavigate() {
        navigation.navigate('REGISTER')
    }

    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <ImageBackground source={require('../assets/image/login-background.png')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                <Image source={require('../assets/image/text-login.png')} style={{ width: '90%', height: '30%', objectFit: 'contain', marginTop: 30}} />

                <View style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.45)', width: '80%', paddingTop: 60, paddingBottom: 46, marginTop: 80, justifyContent: 'center' }}>
                    <TextInput style={{ width: '88%', fontSize: 18, color: 'white' }} placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder="EMAIL" value={email} onChangeText={setEmail} />
                    <View style={{ borderColor: 'white', width: '90%', height: 1, borderWidth: 1, }} />

                    <TextInput style={{ width: '88%', fontSize: 18, marginTop: 50, color: 'white' }} placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder="PASSWORD" value={password} secureTextEntry onChangeText={setPassword} />
                    <View style={{ borderColor: 'white', width: '90%', height: 1, borderWidth: 1, }} />

                    <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: 'black', marginTop: 30 }} onPress={handleLogin}>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 600, paddingHorizontal: 40, paddingVertical: 10 }}>SIGN IN</Text>
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 16 }}>
                        <Text style={{ color: 'white', opacity: 0.5, fontSize: 15  }}>Don't have an account yet?</Text>
                        <TouchableOpacity onPress={handleNavigate}>
                            <Text style={{ color: 'white', fontSize: 15 }}> REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>



                {alert ?
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 20, paddingBottom: 30, backgroundColor: '#fff', position: 'absolute', bottom: 400 }}>
                    <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 50, alignSelf: 'flex-end', backgroundColor: 'black', marginBottom: 20, width: 30, height: 30 }} onPress={() => setAlert(false)}>
                        <Ionicons name="close-outline" size={20} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 17}}>Wrong credentials! or you haven't verified your email</Text>
                </View> : null}

            <Spinner visible={loading} />
        </View>
    );
}
