'use client'

import React from 'react'
import TableComponent from './TableComponent'

const ResultsTable = () =>
{
   return (
      <div className={`flex flex-col flex-1 p-2 gap-2 rounded-lg border border-slate-700`}>
         <div className="flex justify-center pb-2 font-semibold">
            Results Table
         </div>
         <div className="flex flex-col flex-1">
            <TableComponent />
         </div>
      </div>
   )
}

export default ResultsTable