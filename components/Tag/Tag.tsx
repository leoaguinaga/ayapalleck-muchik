import React from 'react'
import { TagProps } from './Tag.types'
import { cn } from '@/lib/utils'

export default function Tag(props: TagProps) {
    const { text, color } = props

    const colorClasses = {
        red: "bg-red-300 text-red-700 dark:bg-red-700/30 dark:text-red-500",
        green: "bg-green-300 text-green-700 dark:bg-green-700/30 dark:text-green-500",
        yellow: "bg-yellow-300 text-yellow-700 dark:bg-yellow-700/30 dark:text-yellow-500",
        orange: "bg-orange-300 text-orange-700 dark:bg-orange-700/30 dark:text-orange-500",
        blue: "bg-blue-300 text-blue-700 dark:bg-blue-700/30 dark:text-blue-500",
        purple: "bg-purple-300 text-purple-700 dark:bg-purple-700/30 dark:text-purple-500",
        gray: "bg-gray-300 text-gray-700 dark:bg-gray-700/30 dark:text-gray-500",
    }

    return (
        <span className={cn(
            "font-semibold py-1 px-2 rounded-lg w-fit capitalize",
            colorClasses[color as keyof typeof colorClasses] || colorClasses.gray
        )}>
            {text}
        </span>
    )
}
