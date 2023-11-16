'use client'

import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { CodeIcon, DataIcon, FilterIcon, LogoutIcon, LottoIcon, RaffleIcon, ResultIcon, SettingsIcon } from './icons/icons'
import { useRouter, usePathname } from 'next/navigation'
import { AppContext } from './context/context'

type TabType = {
   ID: number;
   name: string;
   icon: React.JSX.Element;
   path: string;
}

const Sidebar = () =>
{

   const context = AppContext()

   const [tabs] = useState<TabType[]>( [
      {
         ID: 1,
         name: 'Data Maintenance',
         icon: <DataIcon />,
         path: '/maintenance'
      },
      {
         ID: 2,
         name: 'Raffle',
         icon: <RaffleIcon />,
         path: '/raffle'
      },
      {
         ID: 3,
         name: 'Lotto',
         icon: <LottoIcon />,
         path: '/lotto'
      },
      {
         ID: 4,
         name: 'Results',
         icon: <ResultIcon />,
         path: '/results'
      },
      {
         ID: 5,
         name: 'Settings',
         icon: <SettingsIcon />,
         path: '/settings'
      },
   ] )

   return (
      <nav className={`${context?.isSidebarOpen ? 'w-[240px]' : 'w-[60px]'} flex flex-col min-h-screen border-r justify-center border-r-slate-700`}>
         <div className={`flex items-center justify-center px-2 h-[60px] border-b border-b-slate-700`}>
            {
               context?.isSidebarOpen ? <h3 className='font-bold text-center whitespace-nowrap'>STERLING RAFFLE</h3> : <CodeIcon />
            }

         </div>
         <div className={`flex flex-col  gap-2 flex-1 justify-between p-2`}>
            <div className="flex flex-col gap-1">
               {tabs.map( tab => (
                  <SidebarTab tab={tab} isSidebarOpen={context?.isSidebarOpen ?? true} />
               ) )}
            </div>

            {
               context?.isSidebarOpen ? <Button color="primary">Logout</Button> : <Button color="primary" isIconOnly><LogoutIcon /></Button>
            }

         </div>
      </nav>
   )
}

type SidebarTabProps = {
   tab: TabType,
   isSidebarOpen: boolean,
}

const SidebarTab = ( { tab, isSidebarOpen }: SidebarTabProps ) =>
{

   const router = useRouter()
   const pathname = usePathname()

   const goto = ( path: string ) => router.push( path )

   const checkIsActiveRoute = ( tabPath: string ): boolean => pathname === tabPath

   return (
      <div className={`${checkIsActiveRoute( tab.path ) ? 'bg-primary-500 text-primary ring-1 backdrop-filter backdrop-blur-sm bg-opacity-10 font-semibold' : 'hover:bg-slate-300 hover:rounded-md hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'} flex items-center ${isSidebarOpen ? 'w-full' : 'w-10'} gap-2 p-2 font-medium rounded-md cursor-pointer  transition-colors ease text-ellipsis overflow-hidden`} key={tab.ID} onClick={() => goto( tab.path )}>
         <div className="w-7">
            {tab.icon}
         </div>
         {
            isSidebarOpen && <span className='text-sm whitespace-nowrap'>{tab.name}</span>
         }
      </div>
   )
}

export default Sidebar