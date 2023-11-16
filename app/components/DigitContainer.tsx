'use client'

import React, { memo, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@nextui-org/react';

const DigitContainer = () =>
{
   return (
      <div className="flex flex-col">

         <motion.div
            className={`flex flex-col flex-1 min-h-[200px] rounded-lg`}
         >
            <div className="flex flex-1 items-center">
               <DigitSpinner digit={1} />
               <DigitSpinner digit={2} />
               <DigitSpinner digit={3} />
               <DigitSpinner digit={4} />
               <DigitSpinner digit={5} />
               <DigitSpinner digit={6} />
               <DigitSpinner digit={7} />
               <DigitSpinner digit={8} />
            </div>
         </motion.div>
      </div>
   )
}


const DigitSpinner = memo( ( { digit }: { digit: number } ) =>
{
   const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
   const [number, setNumber] = useState( digit )
   const [count, setCount] = useState( digit )

   // useEffect( () =>
   // {
   //    const interval = setInterval( () =>
   //    {
   //       const newCount = count + 1
   //       setCount( newCount )
   //       setNumber( DIGITS[newCount % DIGITS.length] )
   //    }, 100 );

   //    return () =>
   //    {
   //       clearInterval( interval )
   //    };
   // }, [count] );

   return (
      <div className="flex items-center justify-center flex-1 text-8xl font-bold h-28"><span>{number}</span></div>
   )
} )

export default DigitContainer