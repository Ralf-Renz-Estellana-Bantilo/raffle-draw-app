import React from 'react'

type empInfoType = {
   ID: number;
   label: string;
   value: string,
}

const EmployeeInformation = () =>
{

   const EMPLOYEE_INFORMATION_FIELDS: empInfoType[] = [
      {
         ID: Math.floor( Math.random() * 10000 ),
         label: 'Employee ID:',
         value: '22002851',
      },
      {
         ID: Math.floor( Math.random() * 10000 ),
         label: 'Full Name:',
         value: 'Bantilo, Ralf Renz',
      },
      {
         ID: Math.floor( Math.random() * 10000 ),
         label: 'Class:',
         value: 'RNF',
      },
      {
         ID: Math.floor( Math.random() * 10000 ),
         label: 'Company:',
         value: 'SLAC',
      },
      {
         ID: Math.floor( Math.random() * 10000 ),
         label: 'Department:',
         value: 'MIS',
      },
      {
         ID: Math.floor( Math.random() * 10000 ),
         label: 'Position:',
         value: 'Jr. Programmer',
      },
   ]

   return (
      <div className={`flex flex-col flex-1 p-2 gap-2 rounded-lg border border-slate-700`}>
         <div className="flex justify-center border-b- pb-2 font-semibold">
            Employee Information
         </div>
         <div className="flex flex-col p-3 gap-2 flex-1">

            {EMPLOYEE_INFORMATION_FIELDS.map( ( field: empInfoType ) => (
               <div className="flex items-center gap-2" key={field.ID}>
                  <p className="flex min-w-[120px] text-sm">{field.label}</p>
                  <span className="flex flex-1 font-semibold text-sm">{field.value}</span>
               </div>
            ) )}
         </div>
      </div>
   )
}

export default EmployeeInformation