import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';
import { REACT_APP_URL } from '@env'


export default function AIEngine() {
    const [alert, setAlert] = useState(false);
    const [dataRecommendation, setDataRecommendation] = useState('');
    const [loading, setLoading] = useState(false);
    const [dataCar, setDataCar] = useState({});

    const navigation = useNavigation();
    const textArea = useRef(null);
    let car
    let recommendation

    const findRecommendation = async () => {
        setLoading(true);
        const data = {
            message: textArea.current
        }
        const url = REACT_APP_URL + 'cars/AI';
        try {
            const response = await axios.post(url, data);
            recommendation = response.data.recommendation;
            car = response.data.car;
            setDataRecommendation(recommendation);
            setDataCar(car);
            setLoading(false);
            setAlert(true);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const goToVehiclePage = () => {
        navigation.navigate('DETAILS', { id: dataCar._id });
    }


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/image/AI-bg.jpg')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>

                <View style={{ display: 'flex', alignItems: 'center', width: '100%' }}>

                    <View style={{ width: '75%' }}>
                        <Text style={{ textAlign: 'center', color: '#fff', backgroundColor: '#070707', fontSize: 22, opacity: 0.74, padding: 15, fontWeight: 800 }}>FIND YOUR IDEAL CAR WITH THE POWER OF AI</Text>
                    </View>

                    <TextInput
                        style={{ height: 300, backgroundColor: '#2D2D2D', opacity: 0.65, color: '#fff', width: '90%', marginTop: 50, fontSize: 18, padding: 10, textAlignVertical: 'top' }}
                        placeholder="Tell us a little bit about yourself, your interests and what are your plans with the car and the AI will recommend you a perfect solution JUST FOR YOU"
                        placeholderTextColor='#fff'
                        multiline={true}
                        onChangeText={text => (textArea.current = text)}
                    />
                    <TouchableOpacity onPress={findRecommendation} style={{ marginTop: 30, shadowColor: '#070707', shadowOffset: { width: 0, height: 0, }, shadowOpacity: 1, shadowRadius: 3, elevation: 3, }}>
                        <LinearGradient colors={['#54555A', 'rgb(52, 52, 52)']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} >
                            <Text style={{ fontSize: 22, fontWeight: 800, paddingHorizontal: 15, paddingVertical: 5, color: '#fff' }}>FIND</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {alert ?
                    <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(52, 52, 52, 0.7)' }}>
                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 15, paddingBottom: 25, backgroundColor: '#fff', width: '90%' }}>
                            <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', backgroundColor: 'black', marginBottom: 10, width: 30, height: 30 }} onPress={() => setAlert(false)}>
                                <Ionicons name="close-outline" size={20} color="#fff" />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 17, marginBottom: 20 }}>{dataRecommendation}</Text>

                            <TouchableOpacity onPress={goToVehiclePage}>
                                <LinearGradient colors={['#54555A', 'rgb(52, 52, 52)']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} >
                                    <Text style={{ fontSize: 20, fontWeight: 800, paddingHorizontal: 15, paddingVertical: 5, color: '#fff', textTransform: 'uppercase' }}>{dataCar.name}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View> : null}

                <Spinner visible={loading} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({

})

