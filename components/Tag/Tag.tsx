import React from 'react'
import { TagProps } from './Tag.types'

export default function Tag(props: TagProps) {
    const { text, color } = props

    return (
        <span className={`font-semibold py-1 px-2 rounded-lg bg-${color}-300 text-${color}-700 w-fit dark:bg-${color}-700/30 dark:text-${color}-500`}>
            {text}
        </span>
    )
}
