import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by rel
      </MenuButton>
      <MenuList>
       <MenuItem>R</MenuItem>
       <MenuItem>D</MenuItem>
       <MenuItem>Na</MenuItem>
       <MenuItem>Rd</MenuItem>
       <MenuItem>PP</MenuItem>
       <MenuItem>AA</MenuItem>
      </MenuList>
    </Menu>
    )
}

export default SortSelector
