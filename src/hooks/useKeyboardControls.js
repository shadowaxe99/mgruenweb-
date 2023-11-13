import { useState, useEffect } from 'react';

export const useKeyboardControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.code) {
        case 'ArrowUp':
        case 'KeyW':
          setMovement((m) => ({ ...m, forward: true }));
          break;
        case 'ArrowDown':
        case 'KeyS':
          setMovement((m) => ({ ...m, backward: true }));
          break;
        case 'ArrowLeft':
        case 'KeyA':
          setMovement((m) => ({ ...m, left: true }));
          break;
        case 'ArrowRight':
        case 'KeyD':
          setMovement((m) => ({ ...m, right: true }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.code) {
        case 'ArrowUp':
        case 'KeyW':
          setMovement((m) => ({ ...m, forward: false }));
          break;
        case 'ArrowDown':
        case 'KeyS':
          setMovement((m) => ({ ...m, backward: false }));
          break;
        case 'ArrowLeft':
        case 'KeyA':
          setMovement((m) => ({ ...m, left: false }));
          break;
        case 'ArrowRight':
        case 'KeyD':
          setMovement((m) => ({ ...m, right: false }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};
