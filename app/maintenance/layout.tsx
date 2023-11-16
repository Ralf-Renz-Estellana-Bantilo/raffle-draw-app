'use client'

import { ReactNode } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

export default function MaintenanceLayout ( { children }: { children: ReactNode } )
{
   return (
      <main className={`flex min-h-screen`}>
         <Sidebar />

         {/* MAIN CONTENT */}
         {children}
      </main>
   )
}