import { useParams, Link } from 'react-router-dom'

interface Song {
    id: string
    title: string
    singer: string
    lyrics: string
}

interface PropsSong {
    songs: Song[];
}

const SongDetail = ({ songs }: PropsSong) => {
    const { id } = useParams()

    return (
        <div>
            <img
                src={`https://picsum.photos/200/200?random=${id}`}
                alt="노래 앨범 이미지" />

            <Link to="/">
                돌아가기
            </Link>
        </div>
    )
}

export default SongDetail