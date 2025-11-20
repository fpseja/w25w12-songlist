import { Link } from 'react-router-dom'
import SongCard from '../components/SongCard.tsx'
import type { PropsSongs } from '../types/Song.ts'

export default function SongList({ songs }: { songs: PropsSongs["songs"] }) {
    return (
        <div className='p-6'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {songs.map(song => (
                    <SongCard key={song.id} song={song} />
                ))}
            </div>
        </div>
    )
}