import React, { useState, useEffect, useRef } from 'react'
import { View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import TextStyled from './TextStyled'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CardManga from './CardManga'

import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';

import mangaActions from '../store/Mangas/actions'
import textActions from '../store/search/actions'
import { useNavigation } from '@react-navigation/native';
const { read_mangas } = mangaActions
const { captureText } = textActions


const { mangasFull } = styles;

export default function MangasFull() {
    let styles = mangasFull;
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation()

    useEffect(
        () => {
            dispatch(read_mangas({ inputText: searchText, inputPage: page }))
        },
        [page, searchText]
    )
    let mangas = useSelector(store => store.mangas.mangas)
    let defaultText = useSelector(store => store.text.text)

    function prevPage() {
        if (page !== 1) {
            let numberPage = page
            numberPage--
            setPage(numberPage)
        }
    }

    function nextPage() {
        if (mangas.length === 6) {
            let numberPage = page
            numberPage++
            setPage(numberPage)
        }
    }

    const handleChange = (text) => {
        setSearchText(text)
        dispatch(captureText({ inputText: text }))
    }


    return (
        <ScrollView>
            <LinearGradient colors={['#4338CA', '#000000']} start={{ x: 1, y: 1 }} end={{ x: -0.2, y: 0.1 }} style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center' }}>
                <Image source={require('../assets/Logo.png')} style={{ width: 69, height: 35, alignSelf: 'flex-end', marginTop: 70, marginRight: 26 }} />
                <TextStyled props={styles.h1} content={'MANGAS'} />
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={30} color="#4338CA" />
                    <TextInput style={styles.inputSearch} placeholder="Find your manga here" onChangeText={handleChange} value={searchText} defaultValue={defaultText} />
                </View>
                <LinearGradient colors={['#4338CA', '#000000']} start={[1, 0]} end={[0.5, 1.4]} style={styles.listContainer}>
                    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '80%', alignItems: 'center' }}>
                        <TextStyled props={styles.listTitle} content={'Explore'} />
                        <View style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 21, marginTop: 29 }}>
                            {mangas.length ? (mangas.map((manga) => (
                                <CardManga key={manga._id} title={manga.title} category={manga.category_id} photo={manga.cover_photo} id={manga._id} navigation={navigation}/>
                            ))) : <TextStyled props={{fontSize: 15, color: '#fff', fontFamily: "Medium"}} content={'No results for your search'} />}
                        </View>

                        {searchText === ''? 
                        <View style={{ marginTop: 23, display: 'flex', flexDirection: 'row', width: 130, alignItems: 'center', justifyContent: 'space-between'}}>
                            {page!==1? 
                            <TouchableOpacity onPress={prevPage} style={{ jus: 'flex-start', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4338CA', borderRadius: 100 }}>
                                <Ionicons name="arrow-back-outline" size={25} color="#fff" />
                            </TouchableOpacity> : 
                            
                            <View style={{ opacity: 0.2, width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4338CA', borderRadius: 100 }}>
                                <Ionicons name="arrow-back-outline" size={25} color="#fff" />
                            </View>}
                            {mangas.length === 6? 
                            <TouchableOpacity onPress={nextPage} style={{ alignSelf: 'flex-end', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4338CA', borderRadius: 100 }}>
                                <Ionicons name="arrow-forward-outline" size={25} color="#fff" />
                            </TouchableOpacity> : 
                            
                            <View style={{ opacity: 0.2, alignSelf: 'flex-end', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4338CA', borderRadius: 100 }}>
                                <Ionicons name="arrow-forward-outline" size={25} color="#fff" />
                            </View>}
                        </View> : null }
                        

                    </View>
                </LinearGradient>
            </LinearGradient>
        </ScrollView>
    )
}
