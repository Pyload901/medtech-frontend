import React, { createContext, useState, ReactNode } from 'react';

type UserRoleContextType = {
  userRole: string;
  setUserRole: (role: string) => void;
};

export const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export const UserRoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState('guest');

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};
