import React from 'react'
import { useSelector } from 'react-redux'
import TextStyled from './TextStyled'

export default function Description() {
    let description = useSelector(store => store.mangas.manga.description)

    return (
        <TextStyled content={description} props={{ fontFamily: 'Regular', fontSize: 12, color: '#fff', lineHeight: 20, marginBottom: 100 }} />
    )
}