import { useEffect, useState } from 'react';



function useOutsideClick(el, inicialState) {
    const [isActive, setIsActive] = useState(inicialState)

    useEffect(() => {
        const onClick = e => {
            if (el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive)
            }
        }

        if (isActive) {
            window.addEventListener("click", onClick)
        }

        return () => {
            window.removeEventListener("click", onClick)
        }
    }, [isActive, el])


    return [isActive, setIsActive];
}

export default useOutsideClick;
