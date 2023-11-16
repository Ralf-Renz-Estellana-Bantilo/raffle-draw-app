'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '@nextui-org/react'
import { FilterIcon, SearchIcon } from '../icons/icons'

const LottoPage = () =>
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

         LottoPage
      </div>
   )
}

export default LottoPage