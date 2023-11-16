'use client'

import { Button } from '@nextui-org/react'
import React from 'react'
import { FilterIcon, SearchIcon } from '../icons/icons'
import Navbar from '../components/Navbar'

const MaintenancePage = () =>
{
   return (
      <div className='flex flex-col flex-1'>
         <Navbar>
            <div className="flex items-center px-3 gap-2">
               <Button isIconOnly color="default" variant="light" aria-label="Take a photo">
                  <SearchIcon />
               </Button>
               <Button isIconOnly color="default" variant="light" aria-label="Take a photo">
                  <FilterIcon />
               </Button>
            </div>
         </Navbar>

         MaintenancePage
      </div>
   )
}

export default MaintenancePage