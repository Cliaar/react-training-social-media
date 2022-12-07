import React from 'react'

export const SideNav = ( {currAcc} ) => {
  return (
    <div className='sidenav'>
        <h1>Social</h1>
        <div className='userInfo'>
          <h2 className='accName'>{currAcc.accName}</h2>
          <p className='displayName'>@{currAcc.displayName}</p>
        </div>
    </div>
  )
}
