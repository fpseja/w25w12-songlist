import axios from 'axios'

interface Song {
    id: string
    title: string
    singer: string
    rating: number
    lyrics: string
}

const api = axios.create({
    baseURL: 'http://localhost:8080/api/songs',
})

export const getSongList = async () => {
    const res = await api.get(``)
    return res.data
}

export const getSongDetail = async (id: Song["id"]) => {
    const res = await api.get(`/${id}`)
    return res.data
}