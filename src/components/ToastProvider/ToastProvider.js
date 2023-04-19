import React, { useState } from 'react';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  React.useEffect(() => {
    function handleKeyUp(event) {
      if (event.key === 'Escape') {
        setToasts([]);
      }
    }
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [setToasts]);
  const handleOpenToast = (message, variant) => {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  };

  const handleCloseToast = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };

  return (
    <ToastContext.Provider value={{ toasts, handleOpenToast, handleCloseToast }}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
