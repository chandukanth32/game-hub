import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import PlatfromiconList from './PlatfromiconList'

interface Props{
    game : Game;
}
const GameCard = ({game}:Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                <PlatfromiconList platforms={game.parent_platforms.map(p=>p.platform)}/>
                <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard
