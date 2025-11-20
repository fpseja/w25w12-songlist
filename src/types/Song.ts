export interface Song {
    id: string
    title: string
    singer: string
    rating: number
    lyrics: string
}

export interface PropsSong {
    songs: Song[];
}