import React, { useState } from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  useEscapeKey(() => {
    setToasts([]);
  });
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
