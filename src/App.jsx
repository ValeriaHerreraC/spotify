import React from 'react'
import AppRoutes from './Routes'
import AuthProvider from './context/AuthContext'
//import Player from './components/player';


export const App = () => {

    //return <Player />;
   return(
        <AuthProvider>
            <AppRoutes/>
        </AuthProvider>
)  
}






