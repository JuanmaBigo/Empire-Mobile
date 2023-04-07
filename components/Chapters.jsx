import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ChapterCard from './ChapterCard'
import { useDispatch } from 'react-redux'
import mangaActions from '../store/Mangas/actions'
import { Ionicons } from '@expo/vector-icons';


const { read_chapters } = mangaActions

export default function Chapters({ id }) {
    let chapters = useSelector(store => store.mangas.chapters)
    let count = useSelector(store => store.mangas.count)
    let [display, setDisplay] = useState(true)

    const dispatch = useDispatch()

    const [page, setPage] = useState(1);

    function prevPage() {
        if (page !== 1) {
            let numberPage = page
            numberPage--
            setPage(numberPage)
            dispatch(read_chapters({ id: id, page: numberPage }))
        }
    }

    function nextPage() {
        if (chapters[3]) {
            if (count !== chapters[3].order) {
                let numberPage = page
                numberPage++
                setPage(numberPage)
                dispatch(read_chapters({ id: id, page: numberPage }))
            }
        }
    }

    useEffect(() => {
        let lastChapter = chapters.length;
        lastChapter--;
        const displayedChapters = page * 4;
        const remainingChapters = count - displayedChapters;

        if (remainingChapters > 0) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }, [page, chapters]);




    return (
        <View style={{ alignItems: 'center', marginBottom: 15, width: '100%' }}>
            {(chapters.map((chapter) => (
                <ChapterCard key={chapter.title} title={chapter.title} order={chapter.order} cover_photo={chapter.cover_photo} _id={chapter._id} />
            )))}


            <View style={{ marginTop: 23, display: 'flex', flexDirection: 'row', width: 130, alignItems: 'center', justifyContent: 'space-between' }}>
                {page === 1 ?
                    <View style={{ opacity: 0.2, width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4338CA', borderRadius: 100 }}>
                        <Ionicons name="arrow-back-outline" size={25} color="#fff" />
                    </View> :
                    <TouchableOpacity onPress={prevPage} style={{ jus: 'flex-start', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4338CA', borderRadius: 100 }}>
                        <Ionicons name="arrow-back-outline" size={25} color="#fff" />
                    </TouchableOpacity>}
                {display ? <TouchableOpacity onPress={nextPage} style={{ alignSelf: 'flex-end', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4338CA', borderRadius: 100 }}>
                    <Ionicons name="arrow-forward-outline" size={25} color="#fff" />
                </TouchableOpacity> : <View style={{ opacity: 0.2, alignSelf: 'flex-end', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4338CA', borderRadius: 100 }}>
                    <Ionicons name="arrow-forward-outline" size={25} color="#fff" />
                </View>}
            </View>

        </View>
    )
}