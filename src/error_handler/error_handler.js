import React, { useEffect, useState, useMemo, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Page404 from '../pages/fourohfour'


const ErrorStatusContext = React.createContext()

export default function ErrorHandler({children}){
 const history = useHistory();
 const [errorStatusCode, setErrorStatusCode] = useState();

 useEffect(() => {
     const unlisten = history.listen(() => setErrorStatusCode(undefined));

     return unlisten
 }, [])

 const renderContent = () => {
   console.log(errorStatusCode, 'code')
    //  if(errorStatusCode === 404){
    //      return <Page404/>
    //  }


     return children
 }

 const contextPayload = useMemo(() => 
     ({errorStatusCode}), [errorStatusCode]
 )

 return (
    <ErrorStatusContext.Provider value={contextPayload}>
      {renderContent()}
    </ErrorStatusContext.Provider>
  )


}

export const useErrorStatus = () => useContext(ErrorStatusContext);
