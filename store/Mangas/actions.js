import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import apiUrl from "../../configHost";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {REACT_APP_URL} from '@env'

const read_mangas = createAsyncThunk(
    'read_mangas',
    async ({ inputText, inputPage }) => {
        AsyncStorage.getItem('token')
            .then(res => {
                token = res;
            })
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = process.env.REACT_APP_URL + `mangas?page=${inputPage}&title=${inputText.trim()}`
        try {
            let response = await axios.get(url, headers)
            return {
                mangas: response.data.mangas
            }
        } catch (error) {
            return {
                mangas: []
            }
        }
    }
)

const read_manga = createAsyncThunk(
    'read_manga',
    async ({ id }) => {
        AsyncStorage.getItem('token')
        .then(res => {
            token = res;
        })
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = REACT_APP_URL + 'mangas/' + id;
        try {
            let response = await axios.get(url, headers)
            return {
                manga: response.data.manga
            }
        } catch (error) {
            return {
                manga: {}
            }
        }
    }
)

const read_chapters = createAsyncThunk(
    'read_chapters',
    async ({ id, page, limit }) => {
        AsyncStorage.getItem('token')
        .then(res => {
            token = res;
        })
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = ''
        if (page) {
            url = REACT_APP_URL + 'chapters?' + 'manga_id=' + id + '&page=' + page;
        }
        if (limit === 0) {
            url = REACT_APP_URL + 'chapters?' + 'manga_id=' + id + '&limit=' + limit;
        }
        try {
            let response = await axios.get(url, headers)
            return {
                chapters: response.data.chapters,
                count: response.data.count
            }
        } catch (error) {
            return {
                chapters: [],
                count: 0
            }
        }
    }
)

const get_chapter = createAsyncThunk(
    'get_chapter',
    async ({ id }) => {
        if (id) {

            let token = localStorage.getItem('token')
            let headers = { headers: { 'Authorization': `Bearer ${token}` } }
            let url = apiUrl + 'chapters/' + id;
            try {
                let response = await axios.get(url, headers)
                console.log(response)
                return {
                    chapter: response.data.chapter
                }
            } catch (error) {
                return {
                    chapter: {}
                }
            }
        } else {
            return {
                chapter: {}
            }
        }

    }
)



const actions = { read_mangas, read_manga, read_chapters, get_chapter }

export default actions