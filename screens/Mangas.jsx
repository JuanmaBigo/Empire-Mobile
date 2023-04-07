import React from 'react'
import { View } from 'react-native'
import MangasFull from '../components/MangasFull'
import { ScrollView } from 'react-native-gesture-handler'

export default function Mangas() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <MangasFull/>
        </ScrollView>
    )
}
