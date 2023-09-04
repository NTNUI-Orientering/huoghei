import { useEffect, useRef, useState } from 'react';

/**
 * Ref hook that listens on clicks and returns whether click is outside ref element
 * @returns a ref
 */
const useOutsideClick = () => {
  const [isFocusOutside, setIsFocusOutside] = useState(true);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && ref.current.contains(event.target as Node)) {
        // User clicked inside element
        setIsFocusOutside(false);
      } else {
        // User clicked outside element
        setIsFocusOutside(true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [ref]);

  return { ref, isFocusOutside, setIsFocusOutside };
};

export default useOutsideClick;
