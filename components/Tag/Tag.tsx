import React from 'react'
import { TagProps } from './Tag.types'

export default function Tag(props: TagProps) {
    const { text, color } = props

    switch (color) {
        case 'red':
            return (
                <span className="bg-red-300 text-red-700 dark:bg-red-700/30 dark:text-red-500 font-semibold py-1 px-2 rounded-lg w-fit">
                    {text}
                </span>
            )
        case 'green':
            return (
                <span className="bg-green-300 text-green-700 dark:bg-green-700/30 dark:text-green-500 font-semibold py-1 px-2 rounded-lg w-fit">
                    {text}
                </span>
            )
        case 'yellow':
            return (
                <span className="bg-yellow-300 text-yellow-700 dark:bg-yellow-700/30 dark:text-yellow-500 font-semibold py-1 px-2 rounded-lg w-fit">
                    {text}
                </span>
            )
        case 'orange':
            return (
                <span className="bg-orange-300 text-orange-700 dark:bg-orange-700/30 dark:text-orange-500 font-semibold py-1 px-2 rounded-lg w-fit">
                    {text}
                </span>
            )
        case 'blue':
            return (
                <span className="bg-blue-300 text-blue-700 dark:bg-blue-700/30 dark:text-blue-500 font-semibold py-1 px-2 rounded-lg w-fit">
                    {text}
                </span>
            )
        default:
            return (
                <span className="bg-gray-300 text-gray-700 dark:bg-gray-700/30 dark:text-gray-500 font-semibold py-1 px-2 rounded-lg w-fit">
                    {text}
                </span>
            )
    }
}
