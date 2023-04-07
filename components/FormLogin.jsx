import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextStyled from './TextStyled';
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
        try {
            await axios.post(url, data)
                .then(res => {
                    AsyncStorage.setItem('token', res.data.token);
                    AsyncStorage.setItem('user', JSON.stringify({
                        name: res.data.user.name,
                        mail: res.data.user.mail,
                        photo: res.data.user.photo
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
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={{ width: 139, height: 70, marginBottom: 32 }} />
            <TextStyled props={styles.title} content={'Welcome back!'} />
            <View style={styles.inputContainer}>
                <TextStyled props={styles.inputLabel} content={'Email'} />
                <TextInput style={styles.input} placeholder="email@minga.com" value={email} onChangeText={setEmail} />
            </View>

            <View style={styles.inputContainer}>
                <TextStyled props={styles.inputLabel} content={'Password'} />
                <TextInput style={styles.input} placeholder="..........." value={password} onChangeText={setPassword} secureTextEntry />
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleLogin}>
                <LinearGradient colors={['#4338CA', '#120F35']} locations={[0.2, 1]} start={[0, 0]} end={[1, 1]} style={styles.gradientBtn2}>
                    <TextStyled props={styles.buttonText} content={'Sign in'} />
                </LinearGradient>
            </TouchableOpacity>
            <View style={{ display: 'flex', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 24 }}>
                <TextStyled props={{ color: '#1F1F1F', opacity: 0.5, fontSize: 12, fontFamily: 'Regular' }} content={'Don\'t have an account?'} />
                <TouchableOpacity onPress={handleNavigate}>
                    <TextStyled props={{ color: '#4338CA', fontSize: 12, fontFamily: 'Bold' }} content={' Register'} />
                </TouchableOpacity>
            </View>

            {alert ?
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 20, paddingBottom: 30, backgroundColor: '#4338CA', position: 'absolute', bottom: 400 }}>
                    <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 50, alignSelf: 'flex-end', backgroundColor: 'white', marginBottom: 20, width: 30, height: 30 }} onPress={() => setAlert(false)}>
                        <Ionicons name="close-outline" size={20} color="#404040" />
                    </TouchableOpacity>
                    <TextStyled props={{ color: '#fff', fontSize: 17, fontFamily: 'Regular' }} content={"Wrong credentials! or you haven't verified your email"} />
                </View> : null}

            <Spinner visible={loading} />
        </View>
    );
}
