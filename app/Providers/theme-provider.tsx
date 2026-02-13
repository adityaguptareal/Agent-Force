import React from 'react'
import { ThemeProvider as NextThmeProvider, ThemeProviderProps } from "next-themes"
export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThmeProvider {...props}>{children
        }</NextThmeProvider>
    )
}
