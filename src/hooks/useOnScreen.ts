'use client'
// hooks/useOnScreen.js
import { useEffect, useState, useRef } from 'react'

export const useOnScreen = (options = { threshold: 0.1 }) => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting)
        }, options)

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [options])

    return [ref, isIntersecting]
}