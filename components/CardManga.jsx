import React from 'react'
import { View, Text, Image } from 'react-native'
import TextStyled from './TextStyled'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function CardManga({title, category, photo, id, navigation}) {
    let catColor = ''
    switch (category?.name) {
        case 'shonen':
            catColor= '#EF8481'
            break
        case 'shojo':
            catColor= '#00BA88'
            break
        case 'comic':
            catColor= '#FC9C57'
            break
        case 'seinen':
            catColor= '#8883F0'
            break
        default:
            catColor= 'black'
    }

    function handleNavigate() {
        navigation.navigate('MangaDetails', { id: id })
    }
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={handleNavigate} style={{ width: '100%', height: 144, gap: 10, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', display: 'flex', flexDirection: 'row', elevation: 4 }}>
            <View style={{ height: 95, width: 7, backgroundColor: catColor }} />

            <View style={{ width: 140, height: 95, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                <TextStyled props={{ fontFamily: 'Medium', fontSize: 13 }} content={title} />
                <TextStyled props={{ fontFamily: 'Medium', fontSize: 10, color: 'black' }} content={category.name} />
            </View>

            <Image source={{ uri: photo }} style={{ width: 162, height: '100%', borderBottomLeftRadius: 65, borderTopLeftRadius: 65, borderBottomRightRadius: 10, borderTopRightRadius: 10, alignSelf: 'flex-end' }} />

        </TouchableOpacity>
    )
}
