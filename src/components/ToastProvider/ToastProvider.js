import React, { useState } from 'react';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
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
