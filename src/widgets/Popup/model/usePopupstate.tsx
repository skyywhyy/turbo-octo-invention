import {useCallback, useState} from "react";

export function usePopupstate() {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => {setIsOpen(true);}, []);
    const close =useCallback( () => setIsOpen(false), []);
    // const close =() => {setIsOpen(false);};
    return { isOpen, open, close };
}