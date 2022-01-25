import { cloneElement, ReactElement, useEffect, useRef, useState } from 'react';

interface IDetectClickOutside {
  children: ReactElement;
}

export function DetectClickOutside({
  children,
}: IDetectClickOutside): ReactElement {
  const ref = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e: globalThis.MouseEvent): void => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(e.target as Node | null)
      )
        setIsOpen(false);
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  function toggle(): void {
    setIsOpen((prev) => !prev);
  }

  return (
    <div ref={ref}>
      {cloneElement(children, {
        isOpen,
        toggle,
      })}
    </div>
  );
}
