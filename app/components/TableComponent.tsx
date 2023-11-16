'use client'

import React, { useState, useMemo } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react";
import { useTheme } from '../context/context';

const TableComponent = () =>
{
   const users = [
      {
         key: "1",
         name: "Tony Reichert",
         role: "CEO",
         company: 'SLAC',
         class: 'VIP',
         status: "Active",
      },
      {
         key: "2",
         name: "Zoey Lang",
         role: "Technical Lead",
         company: 'SLAC',
         class: 'VIP',
         status: "Paused",
      },
      {
         key: "3",
         name: "Jane Fisher",
         role: "Senior Developer",
         company: 'SPPE',
         class: 'VIP',
         status: "Active",
      },
      {
         key: "4",
         name: "William Howard",
         role: "Community Manager",
         company: 'SLAC',
         class: 'RNF',
         status: "Vacation",
      },
      {
         key: "5",
         name: "Emily Collins",
         role: "Marketing Manager",
         company: 'SLAC',
         class: 'RNF',
         status: "Active",
      },
      {
         key: "6",
         name: "Brian Kim",
         role: "Product Manager",
         company: 'SLAC',
         class: 'RNF',
         status: "Active",
      },
      {
         key: "7",
         name: "Laura Thompson",
         company: 'SPPE',
         role: "UX Designer",
         class: 'RNF',
         status: "Active",
      },
      {
         key: "8",
         name: "Michael Stevens",
         role: "Data Analyst",
         company: 'SLAC',
         class: 'RNF',
         status: "Paused",
      },
      {
         key: "9",
         name: "Sophia Nguyen",
         role: "Quality Assurance",
         company: 'SLAC',
         class: 'RNF',
         status: "Active",
      },
      {
         key: "10",
         name: "James Wilson",
         role: "Front-end Developer",
         company: 'SPPE',
         class: 'VIP',
         status: "Vacation",
      },
      {
         key: "11",
         name: "Ava Johnson",
         role: "Back-end Developer",
         company: 'SPPE',
         class: 'VIP',
         status: "Active",
      },
      {
         key: "12",
         name: "Isabella Smith",
         role: "Graphic Designer",
         company: 'SLAC',
         class: 'RNF',
         status: "Active",
      },
      {
         key: "13",
         name: "Oliver Brown",
         role: "Content Writer",
         company: 'SLAC',
         class: 'RNF',
         status: "Paused",
      },
      {
         key: "14",
         name: "Lucas Jones",
         role: "Project Manager",
         company: 'SLAC',
         class: 'VIP',
         status: "Active",
      },
      {
         key: "15",
         name: "Grace Davis",
         role: "HR Manager",
         company: 'SPRO',
         class: 'VIP',
         status: "Active",
      },
      {
         key: "16",
         name: "Elijah Garcia",
         role: "Network Administrator",
         company: 'SPRO',
         class: 'RNF',
         status: "Active",
      },
      {
         key: "17",
         name: "Emma Martinez",
         role: "Accountant",
         company: 'SLAC',
         class: 'VIP',
         status: "Vacation",
      },
      {
         key: "18",
         name: "Benjamin Lee",
         role: "Operations Manager",
         company: 'SPRO',
         class: 'VIP',
         status: "Active",
      },
      {
         key: "19",
         name: "Mia Hernandez",
         role: "Sales Manager",
         company: 'SLAC',
         class: 'RNF',
         status: "Paused",
      },
      {
         key: "20",
         name: "Daniel Lewis",
         role: "DevOps Engineer",
         company: 'SLAC',
         class: 'RNF',
         status: "Active",
      },
      {
         key: "21",
         name: "Amelia Clark",
         role: "Social Media Specialist",
         company: 'SLAC',
         class: 'RNF',
         status: "Active",
      },
      {
         key: "22",
         name: "Jackson Walker",
         role: "Customer Support",
         company: 'SLAC',
         class: 'RNF',
         status: "Active",
      },
      {
         key: "23",
         name: "Henry Hall",
         role: "Security Analyst",
         company: 'ESSI',
         class: 'RNF',
         status: "Active",
      },
      {
         key: "24",
         name: "Charlotte Young",
         role: "PR Specialist",
         company: 'SLAC',
         class: 'RNF',
         status: "Paused",
      },
      {
         key: "25",
         name: "Liam King",
         role: "Mobile App Developer",
         company: 'ESSI',
         class: 'RNF',
         status: "Active",
      },
   ];

   const { theme } = useTheme()

   const [page, setPage] = useState( 1 );
   const rowsPerPage = 3;

   const pages = Math.ceil( users.length / rowsPerPage );

   const items = useMemo( () =>
   {
      const start = ( page - 1 ) * rowsPerPage;
      const end = start + rowsPerPage;

      return users.slice( start, end );
   }, [page, users] );

   return (
      <Table
         removeWrapper
         className={`dark flex flex-col justify-between h-full`}
         aria-label="Example table with client side pagination"
         bottomContent={
            <div className="flex w-full justify-center">
               <Pagination
                  isCompact
                  showControls
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={( page ) => setPage( page )}
               />
            </div>
         }
         classNames={{
            wrapper: "min-h-full",
         }}
         color='primary'
      >
         <TableHeader>
            <TableColumn key="name">NAME</TableColumn>
            <TableColumn key="role">ROLE</TableColumn>
            <TableColumn key="company">COMPANY</TableColumn>
            <TableColumn key="class">CLASS</TableColumn>
         </TableHeader>
         <TableBody items={items}>
            {( item ) => (
               <TableRow key={item.name}>
                  {( columnKey ) => <TableCell>{getKeyValue( item, columnKey )}</TableCell>}
               </TableRow>
            )}
         </TableBody>
      </Table>
   )
}

export default TableComponent