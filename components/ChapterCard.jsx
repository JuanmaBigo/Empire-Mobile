import { View, Image } from 'react-native'
import React from 'react'
import TextStyled from './TextStyled'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Chapters(props) {
    let chapter = props

    return (
        <View style={{ marginTop: 30, minHeight: 74, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            
            <Image source={{uri: chapter.cover_photo}}  style={{ height: 74, width: 83, resizeMode: 'cover', borderRadius: 8}} />
            <View style={{ width: 120, display: 'flex', justifyContent: 'space-between', gap: 20}}>
                <TextStyled content={chapter.title} props={{ fontFamily: 'Regular', fontSize: 15, color: '#fff' }} />
                <TextStyled content={'Chapter Nº '+chapter.order} props={{ fontFamily: 'Regular', fontSize: 14, color: '#fff' }} />
            </View>
            <TouchableOpacity activeOpacity={0.4} style={{ height: 74, width: 150, backgroundColor: '#4338CA', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 50000, elevation: 4, }}>
                <TextStyled content={'Read'} props={{ fontFamily: 'Regular', fontSize: 20, color: '#fff' }} />
            </TouchableOpacity>
        </View>
    )
}