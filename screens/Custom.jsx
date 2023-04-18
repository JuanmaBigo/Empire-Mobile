import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'
import modelActions from "../store/model/actions.js"
import colorActions from '../store/color/actions.js'
import rimActions from '../store/rims/actions.js'
import { REACT_APP_URL } from '@env'
import axios from 'axios'
import img from '../assets/image/title-makeIt.png'
import { useFocusEffect } from '@react-navigation/core';


const { getAllColors } = colorActions
const { getAllRims } = rimActions
const { getOne } = modelActions
export default function Custom(props) {
    //console.log(props, 'hola')

    let car_id = props.route.params.id
    //console.log(car_id)
    const [selectedRim, setSelectedRim] = useState();
    const [selectedColor, setSelectedColor] = useState();
    const [loaded, setLoaded] = useState(false)
    const [loaded2, setLoaded2] = useState(false)
    const [loaded3, setLoaded3] = useState(false)
    const [loaded5, setLoaded5] = useState(false)
    const [selectedOption, setSelectedOption] = useState('option 1');
    const [selectedOptionRim, setSelectedOptionRim] = useState('option rim 1');
    const [photoVehicle, setPhotoVehicle] = useState('')

    const dispatch = useDispatch()

    useFocusEffect(
        React.useCallback(() => {
            dispatch(getOne({ _id: car_id }))
            dispatch(getAllColors(car_id))
        }, [])
    );

    useFocusEffect(
        React.useCallback(() => {
            if (loaded2 === true) {
                dispatch(getAllRims(selectedColor))
            }
        }, [selectedColor, selectedRim, loaded2])
    );

    setTimeout(() => {
        setLoaded(true) //dice que ya cargo la pagina para traer los colores
    }, 200);

    setTimeout(() => {
        setLoaded2(true)  //dice que ya cargo la pagina para traer las llantas
    }, 2000);

    useFocusEffect(
        React.useCallback(() => { //solo al pricipio
            console.log('colores', colors)
            if (colors.length > 0) {
                console.log('colores', colors)
                dispatch(getAllRims(colors[0]?._id))
                setSelectedColor(colors[0]?._id)
                setSelectedRim(rims[0]?._id)
                setPhotoVehicle(rims[0]?.photo)
                setSelectedOptionRim('option4')
                setLoaded5(true)
            } else {
                setLoaded3(!loaded3)
            }
        }, [loaded2])
    );

    let colors = useSelector(store => store.colors?.colors)
    let rims = useSelector(store => store.rim?.rim)
    let car = useSelector(store => store.model?.car)

    if (loaded2 === true) {
        setTimeout(() => {
        setPhotoVehicle(rims[parseInt(selectedOptionRim.charAt(selectedOptionRim.length - 1)) - 4]?.photo)
    }, 300);
}



const color1 = { uri: colors[0]?.color_code }
const color2 = { uri: colors[1]?.color_code }
const color3 = { uri: colors[2]?.color_code }
const optionsGroup1 = [
    { label: '', value: 'option1', id: colors[0]?._id },
    { label: '', value: 'option2', id: colors[1]?._id },
    { label: '', value: 'option3', id: colors[2]?._id },
];

const optionsGroup2 = [
    { label: '', value: 'option4', id: rims[0]?._id },
    { label: '', value: 'option5', id: rims[1]?._id },
    { label: '', value: 'option6', id: rims[2]?._id },
];


const [valueGroup1, setValueGroup1] = useState(colors[0]?.id || null);
const [valueGroup2, setValueGroup2] = useState(rims[0]?.id || null);

const handlePressGroup1 = (option) => {
    setValueGroup1(option.id);
    setSelectedColor(option.id);
};

const handlePressGroup2 = (option) => {
    setValueGroup2(option.id);
    setSelectedRim(option.id);
    setSelectedOptionRim(option.value)
};
const radioButtonStyle = {
    radioButton: {
        color: 'transparent'
    }
};

let token = AsyncStorage.getItem('token');
let headers = { headers: { 'Authorization': `Bearer ${token}` } };
let url = `${REACT_APP_URL}items`;

async function handleItem() {
    let data = {
        car_id: car_id,
        color_id: selectedColor,
        rim_id: selectedRim
    }

    // try {
    //     await axios.post(url, data, headers)
    // } catch (error) {
    //     console.log(error)
    // }
    console.log(data)

}
return (
    <ScrollView style={{ backgroundColor: 'rgb(237, 237, 237)', height: '100%', width: '100%' }}>
        <View >
            <View >
                <View >
                    <Image source={img} alt="make it" style={{ width: 300, height: 150, marginTop: 50, marginLeft: 50 }} />
                </View>
                {loaded5 ?
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image source={{ uri: photoVehicle }} alt="make it" style={{ width: 600, height: 200, alignSelf: 'center' }} />

                        <Text style={{ backgroundColor: 'black', width: 420, height: 30, color: 'white', padding: 5, paddingLeft: 20 }}>COLOR SELECTION</Text>

                        <View style={{ marginBottom: 20 }}>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: 400, height: 150 }}>
                                {optionsGroup1.map((option) => (
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <View style={{ position: 'relative' }}>
                                            <Image source={{ uri: colors.find(color => color._id === option.id)?.color_code }} alt={colors[0]?.name} style={{ width: 120, height: 120, marginTop: -30, position: 'absolute', marginLeft: -25, objectFit: 'contain' }} />
                                            <RadioButton.Item key={option.id} label={option.label} value={option.id} status={valueGroup1 === option.id ? 'checked' : 'unchecked'} onPress={() => handlePressGroup1(option)} style={radioButtonStyle.radioButton} />
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <Text style={{ backgroundColor: 'black', width: 420, height: 30, color: 'white', padding: 5, textAlign: 'right', marginTop: 0, paddingRight: 30 }}>RIMS SELECTION</Text>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: 400, height: 180 }}>
                            {optionsGroup2.map((option) => (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <View style={{ position: 'relative' }}>
                                        <Image source={{ uri: rims.find(rim => rim._id === option.id)?.photo_select }} alt={colors[0]?.name} style={{ width: 120, height: 120, marginTop: -30, position: 'absolute', marginLeft: -25 }} />
                                        <RadioButton.Item key={option.id} style={radioButtonStyle.radioButton} label={option.label} value={option.id} status={valueGroup2 === option.id ? 'checked' : 'unchecked'} onPress={() => handlePressGroup2(option)} />
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View> : null}
            </View>
        </View>
        <View>
            <Text style={{ backgroundColor: 'black', width: 420, color: 'white', padding: 15, textAlign: 'center', fontSize: 20, fontWeight: 600 }} >RESUME</Text>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }} >
                <View>
                    <Image source={photoVehicle} alt="Imagen de ejemplo" />
                    <Text style={{ backgroundColor: 'white', width: 420, color: 'black', textAlign: 'center', fontSize: 20, padding: 8 }}>{car?.name}</Text>
                    <Text style={{ backgroundColor: 'rgba(29,38,51,0.5)', width: 420, color: 'white', padding: 5, textAlign: 'center', fontSize: 15 }}>${(car?.price)?.toLocaleString("es-VE")}</Text>
                    <Text style={{ backgroundColor: 'white', width: 420, color: 'black', textAlign: 'center', fontSize: 20, padding: 8 }}>{colors[parseInt(selectedOption.charAt(selectedOption.length - 1)) - 1]?.name}</Text>
                    <Text style={{ backgroundColor: 'rgba(29,38,51,0.5)', width: 420, color: 'white', padding: 5, textAlign: 'center', fontSize: 15 }}>${(colors[parseInt(selectedOption.charAt(selectedOption.length - 1)) - 1]?.price_color)?.toLocaleString("es-VE")}</Text>
                    <Text style={{ backgroundColor: 'white', width: 420, color: 'black', textAlign: 'center', fontSize: 20, padding: 8 }}>{rims[parseInt(selectedOptionRim.charAt(selectedOptionRim.length - 1)) - 4]?.name}</Text>
                    <Text style={{ backgroundColor: 'rgba(29,38,51,0.5)', width: 420, color: 'white', padding: 5, textAlign: 'center', fontSize: 15 }}>${(rims[parseInt(selectedOptionRim.charAt(selectedOptionRim.length - 1)) - 4]?.price_rim)?.toLocaleString("es-VE")}</Text>
                    <Text style={{ backgroundColor: 'white', width: 420, color: 'black', textAlign: 'center', fontSize: 20, padding: 8 }}>TOTAL</Text>
                    <Text style={{ backgroundColor: 'rgba(29,38,51,0.5)', width: 420, color: 'white', padding: 5, textAlign: 'center', fontSize: 15 }}>${(car?.price + colors[parseInt(selectedOption.charAt(selectedOption.length - 1)) - 1]?.price_color + rims[parseInt(selectedOptionRim.charAt(selectedOptionRim.length - 1)) - 4]?.price_rim)?.toLocaleString("es-VE")}</Text>
                    <TouchableOpacity onPress={handleItem}><Text style={{ backgroundColor: 'white', width: 420, height: 60, color: 'black', padding: 5, textAlign: 'center', fontSize: 25 }}>ADD TO CART</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
)
}