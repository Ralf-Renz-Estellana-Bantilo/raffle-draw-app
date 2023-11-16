import React from 'react'
import { Button } from '@nextui-org/react'
import { FilterIcon, MenuIcon, SearchIcon } from './icons/icons'

const Header = () =>
{

   return (
      <header className={`flex justify-between items-center h-[60px] border-b border-b-default-300`}>
         <div className="flex items-center px-2">
            <Button isIconOnly color="default" variant="light" aria-label="Take a photo">
               <MenuIcon />
            </Button>
         </div>

         <div className="flex items-center px-3 gap-2">
            <Button isIconOnly color="default" variant="light" aria-label="Take a photo">
               <SearchIcon />
            </Button>
            <Button isIconOnly color="default" variant="light" aria-label="Take a photo">
               <FilterIcon />
            </Button>
            <Button color="primary">
               Start Raffle
            </Button>
         </div>
      </header>
   )
}

export default Header