import React, { useState, useEffect } from 'react';
import { Login } from "@microsoft/mgt-react";
import { Providers, ProviderState } from '@microsoft/mgt-element';

const useIsSignedIn = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
  
    useEffect(() => {
      const updateState = () => {
        const provider = Providers.globalProvider;
        setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
      };
  
      Providers.onProviderUpdated(updateState);
      updateState();
  
      return () => {
        Providers.removeProviderUpdatedListener(updateState);
      }
    }, []);
  
    return [isSignedIn];
  }

const Header = () => {
  
    return(
      <>
        <div className='text-end'> <Login/> </div>
        <div className='container text-center'>

         {useIsSignedIn === true ? "" : ""}
        </div>
      </>
    )
}

export default Header;