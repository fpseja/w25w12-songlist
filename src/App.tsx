import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import SongList from './pages/SongList.tsx'
import SongDetail from './pages/SongDetail.tsx'
import { getSongList } from './api/songApi.ts'

function App() {
  const { data: songs, isLoading, isError, error } = useQuery({
    queryKey: ['songs'],
    queryFn: getSongList
  })

  if (isLoading) {
    return <p className="text-center mt-10">로딩 중...</p>
  }
  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  return (
    <Routes>
      <Route path="/" element={<SongList songs={songs} />} />
      <Route path="/song/:id" element={<SongDetail songs={songs} />} />
    </Routes>
  )
}

export default App
