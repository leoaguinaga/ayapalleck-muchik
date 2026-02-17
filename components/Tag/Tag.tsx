import React from 'react'
import { TagProps } from './Tag.types'
import { cn } from '@/lib/utils'

export default function Tag(props: TagProps) {
    const { text, color } = props

    const colorClasses = {
        red: "border-1 border-red-300 text-red-700 dark:border-red-700 dark:text-red-500",
        green: "border-1 border-green-300 text-green-700 dark:border-green-700 dark:text-green-500",
        yellow: "border-1 border-yellow-300 text-yellow-700 dark:border-yellow-700 dark:text-yellow-500",
        orange: "border-1 border-orange-300 text-orange-700 dark:border-orange-700 dark:text-orange-500",
        blue: "border-1 border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-500",
        purple: "border-1 border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-500",
        gray: "border-1 border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-500",
    }

    return (
        <span className={cn(
            "font-medium py-0.75 text-xs px-2 rounded-lg w-fit capitalize bg-white",
            colorClasses[color as keyof typeof colorClasses] || colorClasses.gray
        )}>
            {text}
        </span>
    )
}
 