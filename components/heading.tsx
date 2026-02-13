import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export default function Heading({
    children,
    className,
    tag: Tag = 'h2'
}: {
    children: ReactNode,
    className?: string,
    tag?: 'h1' | 'h2'
}) {
    return (
        <Tag className={cn("text-3xl md:text-4xl lg:text-6xl tracking-tight font-display font-bold", className)}>
            {children}
        </Tag>
    )
}