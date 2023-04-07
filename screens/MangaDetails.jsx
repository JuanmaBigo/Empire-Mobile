import React from 'react'
import MangaDetailsFull from '../components/MangaDetailsFull'


export default function MangaDetails(props) {
    id = props.route.params.id
    return (
        <MangaDetailsFull id={id} />
    )
}
