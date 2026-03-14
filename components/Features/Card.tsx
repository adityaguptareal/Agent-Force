import { cn } from '@/lib/utils'
import React from 'react'

export default function Card({ className, children }: { className?: string, children?: React.ReactNode }) {
    return (
        <div className={cn("bg-neutral-50 dark:bg-neutral-800 rounded-lg", className)}>{children}</div>
    )
}

export const CardCTA = ({ className, children, ...res }: React.ComponentProps<"button">) => {
    return (
        <button className={cn('size-5 md:size-10 rounded-full flex items-center justify-center border border-neutral-200 cursor-pointer dark:border-neutral-800 active:scale-1 transition duration-200', className)} {...res}>{children}</button>
    )
}

export const CardContent = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <div className={cn("px-4 pb-6 md:pb-12 flex items-center justify-between gap-5 shrink-0", className)}>{children}</div>
    )
}

export const CardTitle = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <h3 className={cn("text-lg md:text-2xl max-w-[80%] font-bold font-display", className)}>{children}</h3>
    )
}

export const CardSkeleton=({className,children}: {className?: string,children?: React.ReactNode})=>{
    return (
        <div className={cn("min-h-40 md:min-h-80 overflow-hidden bg relative perspective-distant mask-radial-from-50% mask-b-from-70%", className)}>{children}</div>
    )
}