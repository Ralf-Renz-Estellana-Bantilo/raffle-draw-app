import { Button } from '@nextui-org/react'
import React, { ReactNode } from 'react'
import { CloseIcon, MenuIcon } from '../icons/icons'
import { AppContext } from '../context/context'

const Navbar = ( { children }: { children: ReactNode } ) =>
{
   const context = AppContext()

   return (
      <header className={`flex justify-between items-center h-[60px] border-b border-b-slate-700`}>
         <div className="flex items-center px-2">
            <Button isIconOnly onClick={context?.toggleSidebar} color="default" className='text-white' variant="light" aria-label="Take a photo">
               {
                  context?.isSidebarOpen ? <CloseIcon /> : <MenuIcon />
               }

            </Button>
         </div>

         {children}
      </header>
   )
}

export default Navbar