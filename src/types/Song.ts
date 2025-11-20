export interface Song {
    id: string
    title: string
    singer: string
    rating: number
    lyrics: string
}

export interface PropsSongs {
    songs: Song[];
}

export interface PropsSong {
    song: Song;
}