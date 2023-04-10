import React, { useState } from 'react';
import { Image, ImageBackground, TextInput, TouchableOpacity, View, Text } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import drawerActions from '../store/Drawer/actions.js';
import { useNavigation } from '@react-navigation/native';
import { REACT_APP_URL } from '@env'
import Spinner from 'react-native-loading-spinner-overlay';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { reloadDrawer } = drawerActions


export default function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const navigation = useNavigation()
    const dispatch = useDispatch()

    let state = useSelector(store => store.drawerReducer.state)

    async function handleRegister() {
        if (password === confirmPassword) {
            setLoading(true)
            let data = {
                name: name,
                mail: email,
                password: password,
            };
            console.log(data);
            let url = REACT_APP_URL + 'auth/signup'

            try {
                await axios.post(url, data)
                dispatch(reloadDrawer({ state: !state }))
                setAlertMessage('User created successfully!')
                dispatch(reloadDrawer({ state: !state }))
                setLoading(false)
                setAlert(true)

                setTimeout(
                    function () {
                        navigation.navigate('Login')
                    }, 2000);

            } catch (error) {
                let message = ''
                setAlertMessage('')
                if (typeof error.response.data.message === 'string') {
                    message = error.response.data.message
                } else {
                    error.response.data.message.forEach(err => message = err)
                }
                setAlertMessage(message)

                setLoading(false)
                setAlert(true)
            }
        } else {
            setAlertMessage('Passwords do not match!')
            setAlert(true)
        }
    };

    function handleNavigate() {
        navigation.navigate('LOGIN')
    }

    return (
        <View style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center' }}>
            <ImageBackground source={require('../assets/image/register-bg.jpg')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                <Image source={require('../assets/image/text-register.png')} style={{ width: '90%', height: '30%', objectFit: 'contain', marginTop: 30 }} />

                <View style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.45)', width: '80%', paddingTop: 40, paddingBottom: 46, marginTop: 20, justifyContent: 'center' }}>
                    <TextInput style={{ width: '88%', fontSize: 18, color: '#fff' }} placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder="NAME" value={name} onChangeText={setName} />
                    <View style={{ borderColor: '#fff', width: '90%', height: 1, borderWidth: 1, }} />

                    <TextInput style={{ width: '88%', fontSize: 18, marginTop: 50, color: '#fff' }} placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder="EMAIL" value={email} onChangeText={setEmail} />
                    <View style={{ borderColor: '#fff', width: '90%', height: 1, borderWidth: 1, }} />

                    <TextInput style={{ width: '88%', fontSize: 18, marginTop: 50, color: '#fff' }} placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder="PASSWORD" value={password} secureTextEntry onChangeText={setPassword} />
                    <View style={{ borderColor: '#fff', width: '90%', height: 1, borderWidth: 1, }} />

                    <TextInput style={{ width: '88%', fontSize: 18, marginTop: 50, color: '#fff' }} placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder="CONFIRM PASSWORD" value={confirmPassword} secureTextEntry onChangeText={setConfirmPassword} />
                    <View style={{ borderColor: '#fff', width: '90%', height: 1, borderWidth: 1, }} />


                    <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: '#fff', marginTop: 40 }} onPress={handleRegister}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 600, paddingHorizontal: 40, paddingVertical: 10 }}>REGISTER</Text>
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 16 }}>
                        <Text style={{ color: 'white', opacity: 0.5, fontSize: 15 }}>Already have an account?</Text>
                        <TouchableOpacity onPress={handleNavigate}>
                            <Text style={{ color: 'white', fontSize: 15 }}> LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            {alert ?
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 20, paddingBottom: 30, backgroundColor: '#fff', position: 'absolute', bottom: 400 }}>
                    <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 50, alignSelf: 'flex-end', backgroundColor: 'black', marginBottom: 20, width: 30, height: 30 }} onPress={() => setAlert(false)}>
                        <Ionicons name="close-outline" size={20} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 17 }}>{alertMessage}</Text>
                </View> : null}

            <Spinner visible={loading} />
        </View>
    );
}


