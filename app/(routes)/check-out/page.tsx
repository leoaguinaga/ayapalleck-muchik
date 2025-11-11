"use client"

import { useState, useMemo } from 'react'
import { StaysToolbar } from './components/StaysToolbar'
import { StaysTable } from './components/StaysTable'
import { columns } from './components/columns'
import { mockStays } from './data'
import { TabFilter } from './types'
import { startOfDay, endOfDay, addDays } from 'date-fns'

export default function CheckOutPage() {
  const [selectedTab, setSelectedTab] = useState<TabFilter>('today')
  const [searchValue, setSearchValue] = useState('')
  const [selectedRows, setSelectedRows] = useState(0)

  const filteredData = useMemo(() => {
    let filtered = mockStays

    // Filtro por tab
    const today = new Date()
    const todayStart = startOfDay(today)
    const todayEnd = endOfDay(today)
    const tomorrowStart = startOfDay(addDays(today, 1))
    const tomorrowEnd = endOfDay(addDays(today, 1))

    switch (selectedTab) {
      case 'today':
        filtered = filtered.filter((stay) => {
          const checkOut = new Date(stay.checkOut)
          return checkOut >= todayStart && checkOut <= todayEnd
        })
        break
      case 'overdue':
        filtered = filtered.filter((stay) => stay.stayState === 'delayed')
        break
      case 'tomorrow':
        filtered = filtered.filter((stay) => {
          const checkOut = new Date(stay.checkOut)
          return checkOut >= tomorrowStart && checkOut <= tomorrowEnd
        })
        break
      case 'all':
      default:
        break
    }

    // Filtro por búsqueda
    if (searchValue) {
      const searchLower = searchValue.toLowerCase()
      filtered = filtered.filter(
        (stay) =>
          stay.guest.name.toLowerCase().includes(searchLower) ||
          stay.room.code.toLowerCase().includes(searchLower) ||
          stay.folio.toLowerCase().includes(searchLower)
      )
    }

    return filtered
  }, [selectedTab, searchValue])

  return (
    <div className="flex flex-col gap-6">
      <StaysToolbar
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        selectedRows={selectedRows}
      />

      <StaysTable
        columns={columns}
        data={filteredData}
        onRowSelectionChange={setSelectedRows}
      />
    </div>
  )
}
