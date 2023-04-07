import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import mangaActions from '../store/Mangas/actions'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, View } from 'react-native'
import DetailsMain from './DetailsMain'
import RatingStats from './RatingStats'
import DescriptionAndChapters from './DescriptionAndChapters'


const { read_manga, read_chapters } = mangaActions

export default function MangaDetailsFull({ id }) {
    const [page, setPage] = useState(1);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(read_manga({ id: id }))
        dispatch(read_chapters({ id: id, page: page }))
    }, []);



    return (
        <ScrollView style={{ flex: 1 }}>
            <LinearGradient colors={['#4338CA', '#000000']} end={{ x: 1.5, y: 1.4 }} start={{ x: -0.2, y: 0.1 }} style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center' }}>
                <Image source={require('../assets/Logo.png')} style={{ width: 69, height: 35, alignSelf: 'flex-end', marginTop: 70, marginRight: 26 }} />
                <View style={{display: 'flex', width: '92%', flexDirection: 'column'}}>
                    <DetailsMain />
                    <RatingStats/>
                    <DescriptionAndChapters id={id}/>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}
