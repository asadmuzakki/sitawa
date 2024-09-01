import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Definisikan tipe untuk state
interface State {
  actionHapusPengaduan:boolean
  actionHapusPerangkat:boolean
  yearChoiceed?:string
}

// Tipe untuk Context
interface GlobalContextType {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
}

// Buat Context dengan default value
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Definisikan tipe untuk props dari provider
interface GlobalProviderProps {
  children: ReactNode;
}

// Membuat GlobalProvider
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>({
    actionHapusPengaduan:false,
    actionHapusPerangkat:false,
    yearChoiceed:"2024"
  });

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
