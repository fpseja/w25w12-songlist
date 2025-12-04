import axios from 'axios'
import type { Song } from '../types/Song.ts'

const api = axios.create({
    baseURL: 'https://fpseja.github.io/w25w12-songlist/',
})

export const getSongList = async () => {
    const res = await api.get(``)
    return res.data
}

export const getSongDetail = async (id: Song["id"]) => {
    const res = await api.get(`/${id}`)
    return res.data
}