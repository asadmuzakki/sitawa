import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';


interface State {
  actionHapusPengaduan:boolean
  actionHapusPerangkat:boolean
  yearChoiceed?:string
  actionLogOut : boolean
  actionAddData:boolean
}


interface GlobalContextType {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
}


export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);


interface GlobalProviderProps {
  children: ReactNode;
}


export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>({
    actionHapusPengaduan:false,
    actionHapusPerangkat:false,
    yearChoiceed:"2024",
    actionLogOut:false,
    actionAddData:false
  });

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
