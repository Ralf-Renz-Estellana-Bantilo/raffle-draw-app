'use client'

import { ReactNode, createContext, useContext, useState } from 'react';
import { contextValueType, themeType } from '../interfaces';

// Create a new context
const ComponentContext = createContext<contextValueType | null>( null );

// Create a custom provider component
export function ComponentContextProvider ( { children }: { children: ReactNode } )
{
   const [theme, setTheme] = useState<themeType>( 'light' );
   const [isSidebarOpen, setIsSidebarOpen] = useState( true )

   const toggleTheme = () =>
   {
      setTheme( prevTheme => prevTheme === 'light' ? 'dark' : 'light' )
   }

   const toggleSidebar = () =>
   {
      setIsSidebarOpen( prevState => !prevState )
   }

   const value: contextValueType | null = {
      theme,
      isSidebarOpen,
      toggleSidebar,
      toggleTheme,
   }

   return (
      <ComponentContext.Provider value={value}>
         {children}
      </ComponentContext.Provider>
   );
}

// Create a custom hook to access the context
export function useTheme ()
{
   const context = useContext<contextValueType | null>( ComponentContext );
   if ( context === null )
   {
      throw new Error( 'ComponentContext error!' );
   }

   return context
}

export const AppContext = () =>
{
   return useContext( ComponentContext )
}