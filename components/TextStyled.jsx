import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';


export default function TextStyled({ props, content }) {
    let [fontsLoaded] = useFonts({
        Bold: require('../assets/fonts/Montserrat-Bold.ttf'),
        Regular: require('../assets/fonts/Montserrat-Regular.ttf'),
        Medium: require('../assets/fonts/Montserrat-Medium.ttf'),
        Light: require('../assets/fonts/Montserrat-Light.ttf'),
        SemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
        ExtraBold: require('../assets/fonts/Montserrat-ExtraBold.ttf'),
        Black: require('../assets/fonts/Montserrat-Black.ttf'),
    });

    props.fontFamily = props.fontFamily || 'Regular';
    props.fontSize = props.fontSize || 16;
    props.color = props.color || '#000';
    props.textAlign = props.textAlign || 'left';
    props.textShadowRadius = props.textShadowRadius || 0;
    props.shadowOpacity = props.shadowOpacity || 0;
    props.opacity = props.opacity || 1;
    props.marginBottom = props.marginBottom || 0;
    props.marginTop = props.marginTop || 0;
    props.marginLeft = props.marginLeft || 0;
    props.marginRight = props.marginRight || 0;
    props.width = props.width || 'auto';
    props.height = props.height || 'auto';
    props.alignSelf = props.alignSelf || 'auto';
    props.elevation = props.elevation || 0;
    props.lineHeight = props.lineHeight || null;

    const styles = StyleSheet.create({
        text: {
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            color: props.color,
            textAlign: props.textAlign,
            textShadowRadius: props.textShadowRadius,
            textShadowColor: props.textShadowColor,
            shadowOpacity: props.shadowOpacity,
            opacity: props.opacity,
            marginBottom: props.marginBottom,
            marginTop: props.marginTop,
            alignSelf: props.alignSelf,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            width: props.width,
            height: props.height,
            elevation: props.elevation,
            lineHeight: props.lineHeight,
        },
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Text style={styles.text}>{content}</Text>
    )
}


