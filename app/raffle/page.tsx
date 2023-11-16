'use client'

import React from 'react'
import DigitContainer from '../components/DigitContainer'
import EmployeeInformation from '../components/EmployeeInformation'
import Navbar from '../components/Navbar'
import { Button } from '@nextui-org/react'
import { FilterIcon, SearchIcon } from '../icons/icons'
import ResultsTable from '../components/ResultsTable'

const RafflePage = () =>
{
   return (
      <div className="flex flex-col flex-1">
         <Navbar>
            <div className="flex items-center px-3 gap-2 h-[60px]">
               <Button isIconOnly color="default" className='text-white' variant="light" aria-label="Take a photo">
                  <SearchIcon />
               </Button>
               <Button isIconOnly color="default" className='text-white' variant="light" aria-label="Take a photo">
                  <FilterIcon />
               </Button>
               <Button color="primary">
                  Start Raffle
               </Button>
            </div>
         </Navbar>
         <div className={`flex flex-col h-full p-5 gap-4`}>
            <DigitContainer />
            <div className={`flex flex-1 gap-4`}>
               <EmployeeInformation />

               <ResultsTable />
            </div>
         </div>
      </div>
   )
}

export default RafflePage