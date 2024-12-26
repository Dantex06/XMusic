'use client'

import { useParams } from 'next/navigation'

export default function Genre() {
    const params = useParams()
    return <p>Genre: {params.genre}</p>
}
