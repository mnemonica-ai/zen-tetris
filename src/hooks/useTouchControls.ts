import { useEffect, useRef, useCallback } from 'react';

interface TouchControlsOptions {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onMoveDown: () => void;
  onRotate: () => void;
  onHardDrop: () => void;
  enabled: boolean;
}

export function useTouchControls(
  containerRef: React.RefObject<HTMLElement | null>,
  options: TouchControlsOptions
) {
  const { onMoveLeft, onMoveRight, onMoveDown, onRotate, onHardDrop, enabled } = options;
  
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const lastMoveRef = useRef<number>(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!enabled) return;
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  }, [enabled]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!enabled || !touchStartRef.current) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const now = Date.now();
    
    // Throttle moves to prevent too rapid movement
    if (now - lastMoveRef.current < 80) return;
    
    const threshold = 30; // Minimum swipe distance
    
    // Horizontal movement takes priority
    if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        onMoveRight();
      } else {
        onMoveLeft();
      }
      // Reset start position for continuous swiping
      touchStartRef.current.x = touch.clientX;
      lastMoveRef.current = now;
      e.preventDefault();
    }
    // Downward swipe for soft drop
    else if (deltaY > threshold && deltaY > Math.abs(deltaX)) {
      onMoveDown();
      touchStartRef.current.y = touch.clientY;
      lastMoveRef.current = now;
      e.preventDefault();
    }
  }, [enabled, onMoveLeft, onMoveRight, onMoveDown]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!enabled || !touchStartRef.current) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const duration = Date.now() - touchStartRef.current.time;
    
    const swipeThreshold = 50;
    const tapThreshold = 15;
    const quickTapTime = 200;
    
    // Quick tap = rotate
    if (Math.abs(deltaX) < tapThreshold && Math.abs(deltaY) < tapThreshold && duration < quickTapTime) {
      onRotate();
      e.preventDefault();
    }
    // Quick swipe up = hard drop
    else if (deltaY < -swipeThreshold && Math.abs(deltaY) > Math.abs(deltaX) && duration < 300) {
      onHardDrop();
      e.preventDefault();
    }
    
    touchStartRef.current = null;
  }, [enabled, onRotate, onHardDrop]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [containerRef, handleTouchStart, handleTouchMove, handleTouchEnd]);
}
