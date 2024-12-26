import PartyImage from '@/assets/images/Genre/Party.png'
import TrendingImage from '@/assets/images/Genre/Trending.png'
import MoodImage from '@/assets/images/Genre/Mood.png'
import PopImage from '@/assets/images/Genre/Pop.png'
import HipHopImage from '@/assets/images/Genre/HipHop.png'
import GymImage from '@/assets/images/Genre/Gym.png'
import ChillImage from '@/assets/images/Genre/Chill.png'
import LoveImage from '@/assets/images/Genre/Love.png'
import FoodImage from '@/assets/images/Genre/Food.png'
import Image from 'next/image'
import { GenreTypes } from '@/components/CardButton/types'

export const GenreTypesList: GenreTypes[] = [
    GenreTypes.Party,
    GenreTypes.Trending,
    GenreTypes.Mood,
    GenreTypes.Pop,
    GenreTypes.HipHop,
    GenreTypes.Chill,
    GenreTypes.Gym,
    GenreTypes.Love,
    GenreTypes.Food,
]

export const ImageGenre = (type: GenreTypes) => {
    switch (type) {
        case GenreTypes.Party:
            return <Image src={PartyImage} alt="Party" />
        case GenreTypes.Trending:
            return <Image src={TrendingImage} alt="Trending" />
        case GenreTypes.Mood:
            return <Image src={MoodImage} alt="Mood" />
        case GenreTypes.Pop:
            return <Image src={PopImage} alt="Pop" />
        case GenreTypes.HipHop:
            return <Image src={HipHopImage} alt="HipHop" />
        case GenreTypes.Chill:
            return <Image src={ChillImage} alt="Chill" />
        case GenreTypes.Gym:
            return <Image src={GymImage} alt="Gym" />
        case GenreTypes.Love:
            return <Image src={LoveImage} alt="Love" />
        case GenreTypes.Food:
            return <Image src={FoodImage} alt="Food" />
    }
}
