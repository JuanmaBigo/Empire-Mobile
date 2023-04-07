import React from 'react'
import { View, Image } from 'react-native'
import { useSelector } from 'react-redux'
import TextStyled from './TextStyled'

export default function DetailsMain() {
    let manga = useSelector(store => store.mangas.manga)

    let category = manga.category_id?.name;
    let company = manga.company_id?.name;

    let catColor = ''
    let bgColor = ''
    switch (category) {
        case 'shonen':
            catColor = '#EF8481'
            bgColor = '#FFE0DF'
            break
        case 'shojo':
            catColor = '#00BA88'
            bgColor = '#D1FBF0'

            break
        case 'comic':
            catColor = '#FC9C57'
            bgColor = '#FFDFC8'

            break
        case 'seinen':
            catColor = '#8883F0'
            bgColor = '#E0DBFF'

            break
        default:
            catColor = 'black'
            bgColor = 'white'
    }

    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Image source={{ uri: manga.cover_photo }} style={{ height: 352, width: '100%', borderRadius: 8, marginTop: 32, marginBottom: 10, resizeMode: 'cover', }} />
            <TextStyled content={manga.title} props={{ fontFamily: 'Regular', fontSize: 38, color: '#fff' }} />
            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ backgroundColor: bgColor, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 12, borderRadius: 50, paddingTop: 12, paddingBottom: 14 }}>
                    <TextStyled content={category} props={{ fontFamily: 'Medium', fontSize: 12, color: catColor }} />
                </View>
                <TextStyled content={company} props={{ fontFamily: 'Medium', fontSize: 20, color: '#fff' }} />
            </View>
        </View>
    )
}
