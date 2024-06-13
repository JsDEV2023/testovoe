import { useEffect, useRef, useState } from 'react';

export const useOutsideAlerter = (initialIsVisible:any) => {
    /** состояние по умолчанию */
    const [isShow, setIsShow] = useState(initialIsVisible)
    /** будем получать ссылку на тег */
    const ref = useRef<HTMLDivElement>(null)

    /**ф-ия закрытия окна, если кликнули вне области */
    const handleClickOutside = (event:any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
        }
    }

    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    })

    return { ref, isShow, setIsShow}
}