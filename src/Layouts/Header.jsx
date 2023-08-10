import React, { useEffect, useState } from 'react'
import useScreenSize from '../Hooks/useScreenSize';
import Sidebar from './Sidebar';

const Header = () => {
  const screenSize = useScreenSize();
  return (
    <>
    {screenSize.width>=799
      ?
      (<>

        <div>Desktop Header</div>
        <Sidebar />
        </>
      )
      :
      <div>mobile Header</div>
    }
    </>
  )
}

export default Header