'use client'

import { useParams } from 'next/navigation'

export default function Playlist() {
    const params = useParams()
    return <p>Post: {params.name}</p>
}
