import { Link } from 'react-router-dom'
import SongCard from '../components/SongCard.tsx'

interface Song {
    id: string
    title: string
    singer: string
    lyrics: string
}


export default function SongList({ songs }: { songs: Song[] }) {
    return (
        <>
            {songs.map(song => (
                <SongCard key={song.id} song={song} />
            ))}
        </>
    )
}