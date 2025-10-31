import React from 'react'
import { userActivitiesData } from './UserActivity.data'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { 
    LogIn, 
    LogOut, 
    UserCheck, 
    UserMinus, 
    Home, 
    Calendar, 
    Edit,
    Clock
} from 'lucide-react'

export default function UserActivity() {
    const getActivityIcon = (type: string) => {
        switch (type) {
            case "login":
                return <LogIn className='size-5 text-green-600' />
            case "logout":
                return <LogOut className='size-5 text-gray-600' />
            case "check-in":
                return <UserCheck className='size-5 text-blue-600' />
            case "check-out":
                return <UserMinus className='size-5 text-orange-600' />
            case "room-update":
                return <Home className='size-5 text-purple-600' />
            case "booking-created":
                return <Calendar className='size-5 text-green-600' />
            case "booking-updated":
                return <Edit className='size-5 text-yellow-600' />
            default:
                return <Clock className='size-5 text-gray-600' />
        }
    }

    return (
        <div className='border rounded-lg p-5 bg-card'>
            <h2 className='text-lg font-semibold mb-4 flex items-center gap-2'>
                <Clock className='size-5' />
                Actividad del usuario
            </h2>
            <div className='max-h-[600px] overflow-y-auto'>
                <div className='flex flex-col gap-3'>
                    {userActivitiesData.map((activity) => (
                        <div 
                            key={activity.id}
                            className='p-3 border rounded-lg hover:bg-accent/50 transition-colors'
                        >
                            <div className='flex items-start gap-3'>
                                <div className='mt-0.5 flex-shrink-0'>
                                    {getActivityIcon(activity.type)}
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <div className='flex items-start justify-between gap-2 mb-1'>
                                        <p className='font-medium text-sm'>
                                            {activity.description}
                                            {activity.roomNumber && (
                                                <span className='ml-1 text-primary'>
                                                    (Hab. {activity.roomNumber})
                                                </span>
                                            )}
                                        </p>
                                        <p className='text-xs text-muted-foreground whitespace-nowrap'>
                                            {format(activity.timestamp, "dd/MM/yyyy HH:mm", { locale: es })}
                                        </p>
                                    </div>
                                    {activity.details && (
                                        <p className='text-xs text-muted-foreground'>
                                            {activity.details}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
