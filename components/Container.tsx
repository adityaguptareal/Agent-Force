import React, { ReactNode } from 'react'
import { cn } from '../app/lib/utils';

export default function Container({ className, children }: { className?: String; children: ReactNode }) {
    return (
        <div className={cn('max-w-7xl px-4 md:px-0 mx-auto', className)}>
            {children}
        </div>
    )
}
