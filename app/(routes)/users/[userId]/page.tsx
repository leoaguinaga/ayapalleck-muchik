import React from 'react'
import UserInfo from './components/UserInfo'
import UserDetails from './components/UserDetails'
import UserActivity from './components/UserActivity'
import DangerZone from './components/DangerZone'

export default async function UserIdPage({ params }: { params: { userId: string } }) {
  const { userId } = await params

  const user = {
    userId: userId,
    name: "María López García",
    email: "maria.lopez@ayapalleck.com",
    role: "Recepcionista",
    phone: "987654321",
    documentNumber: "45678901",
    hireDate: new Date("2023-03-15"),
    status: "Activo" as const
  }

  return (
    <div className='flex flex-col gap-5'>
      <UserInfo />
      <div className='flex flex-col gap-5'>
        <UserDetails {...user} />
        <UserActivity />
      </div>
      <DangerZone userId={userId} userName={user.name} userData={user} />
    </div>
  )
}
