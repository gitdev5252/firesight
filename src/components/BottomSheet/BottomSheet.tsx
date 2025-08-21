'use client';

import { useEffect, useRef, useState, PropsWithChildren } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
};

export default function BottomSheet({
  open,
  onClose,
  title,
  children,
}: PropsWithChildren<Props>) {
  // Animation state: 'closed', 'opening', 'open', 'closing'
  const [animationState, setAnimationState] = useState<'closed' | 'opening' | 'open' | 'closing'>(open ? 'open' : 'closed');
  const ref = useRef<HTMLDialogElement>(null);

  // Drag state for pan
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);

  // Handle drag start
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  // Handle drag move
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientY - dragStartY.current;
    setDragY(delta > 0 ? delta : 0);
  };

  // Handle drag end
  const handlePointerUp = () => {
    setIsDragging(false);
    if (dragY > 80) { // threshold to close
      setDragY(0);
      onClose();
    } else {
      setDragY(0);
    }
  };

  // Imperatively sync the native <dialog> with React state and animation
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open) {
      if (!d.open) d.showModal();
      setAnimationState('opening');
      setTimeout(() => setAnimationState('open'), 20); // allow for reflow
    } else if (d.open) {
      setAnimationState('closing');
      setTimeout(() => {
        setAnimationState('closed');
        d.close();
        onClose();
      }, 250); // match transition duration
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // ESC & programmatic close -> bubble to onClose (only if not animating)
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handleClose = () => {
      if (animationState !== 'closing') onClose();
    };
    d.addEventListener('close', handleClose);
    return () => d.removeEventListener('close', handleClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, animationState]);

  // Click on the backdrop to close
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handleClick = (e: MouseEvent) => {
      if (e.target === d) onClose();
    };
    d.addEventListener('click', handleClick);
    return () => d.removeEventListener('click', handleClick);
  }, [onClose]);

  // Animation classes
  const panelClass =
    animationState === 'opening' || animationState === 'open'
      ? 'translate-y-0 opacity-100'
      : 'translate-y-full opacity-0';

  return (
    <dialog
      ref={ref}
      className="bottom-sheet m-0 w-full max-w-none p-0 outline-none "
      aria-labelledby={title ? 'sheet-title' : undefined}
      style={{ pointerEvents: animationState === 'closed' ? 'none' : undefined }}
    >
      {/* Sheet pan/handle floating above the sheet */}
      <div
        className={`fixed left-1/2 bottom-[calc(45dvh+12px)] z-50 -translate-x-1/2 transition-all duration-250 ${panelClass}`}
        style={{ pointerEvents: 'auto', touchAction: 'none', cursor: isDragging ? 'grabbing' : 'grab' }}
        aria-hidden
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
          <div
            className="h-[4px] w-[80px] rounded-full shadow-md"
            style={{
              background: 'linear-gradient(180deg, #14FF008C 55%, #00F0FF9E 62%)',
            }}
          />
      </div>
      {/* Inner panel: we animate this in from the bottom */}
      <div
        className={`fixed inset-x-0 bottom-0 max-h-[90dvh] bg-[#ffffff15] backdrop-blur-[40px] dark:bg-neutral-900 shadow-xl overflow-hidden transition-all duration-250 will-change-transform rounded-tl-[10px] rounded-tr-[10px] border border-[#FFFFFF1A] ${panelClass}`}
        data-open={open}
        style={{ transform: `translateY(${dragY}px)` }}
      >
        <div className="relative">
          {title ? (
            <h2 id="sheet-title" className="px-4 pb-2 pt-4 text-base font-semibold">
              {title}
            </h2>
          ) : null}
        </div>

        <div className="max-h-[calc(90dvh-48px)] overflow-auto px-4 pb-6 pt-2">
          {children}
        </div>
      </div>
    </dialog>
  );
}
