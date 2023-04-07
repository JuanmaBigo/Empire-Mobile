import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import TextStyled from './TextStyled'

export default function DetailsMain() {
    let count = useSelector(store => store.mangas.count)
    let style = []
    style[0] = {color: '#424242', fontFamily: 'Regular', fontSize: 24, textAlign: 'center'}
    style[1] = {color: '#9D9D9D', fontFamily: 'Regular', fontSize: 12, textAlign: 'center'}

    return (
        <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', backgroundColor: '#ffffff', borderRadius: 20, alignItems: 'center', marginTop: 50 }}>
            <View style={{paddingVertical: 25 }}>
                <TextStyled props={style[0]} content={'4.5/5'}/>
                <TextStyled props={style[1]} content={'Rating'}/>
            </View>
            <View style={{paddingVertical: 25 }}>
                <TextStyled props={style[0]} content={count}/>
                <TextStyled props={style[1]} content={'Chapters'}/>
            </View>
            <View style={{paddingVertical: 25 }}>
                <TextStyled props={style[0]} content={'Eng'}/>
                <TextStyled props={style[1]} content={'Language'}/>
            </View>
        </View>
    )
}
