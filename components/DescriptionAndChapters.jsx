import React, { useState, useRef } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Description from './Description'
import Chapters from './Chapters'


const DescriptionAndChapters = ({id}) => {
    const [isChecked, setIsChecked] = useState(true);

    const handleChange = (value) => {
        setIsChecked(value);
    }

    let [fontsLoaded] = useFonts({
        Regular: require('../assets/fonts/Montserrat-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Text style={[styles.btnText, isChecked ? styles.btnSelected : null]}>Description</Text>
                    <Switch
                        style={styles.inputDetails}
                        trackColor={{ false: "#EBEBEB", true: "#EBEBEB" }}
                        onValueChange={handleChange}
                        value={isChecked}
                    />
                    <Text style={[styles.btnText, !isChecked ? styles.btnSelected : null]}>Chapters</Text>
                </View>
            </View>
            {isChecked ? <Description /> : <Chapters id={id}/>}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        height: 35,
        marginTop: 37,
        marginBottom: 27,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        position: 'relative',
        width: 250,
        height: 35,
        backgroundColor: 'white'
    },
    inputDetails: {
        width: 300,
        opacity: 0,
        position: 'absolute',
        top: 0,
        zIndex: 1,
        margin: 0,
    },
    btnText: {
        width: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        fontSize: 12,
        fontFamily: 'Regular',
        lineHeight: 14,
        color: '#9D9D9D',
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        textAlign: 'center',
        lineHeight: 30

    },
    btnSelected: {
        color: 'white',
        backgroundColor: '#4338CA',
        borderRadius: 20,
    },
})

export default DescriptionAndChapters;