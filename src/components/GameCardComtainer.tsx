import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props{
    children : ReactNode
}

const GameCardComtainer = ({children}:Props) => {
    return (
         //when rendered it returns a DIV
        <Box height='300px' borderRadius={10} overflow='hidden'>
            {children}
        </Box>
    )
}

export default GameCardComtainer
