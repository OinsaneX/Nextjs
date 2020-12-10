import Axios from 'axios';
import React, { useContext, createContext } from 'react';

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [userAuth, setUser] = React.useState(null);


const login=async()=>{

  const user = await Axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/usuarios/${localStorage.getItem("id")}`)
  setUser(user.data)
}


  //ComponentDidMouunt
  React.useEffect(() => {
    login()
  }, []);

  //
  const values = React.useMemo(() => (
    { userAuth,      // States que seran visibles en el contexto.
      setUser,
      login,
         // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      userAuth ]);   // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export function useAppContext() {
  const context = useContext(AppContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;