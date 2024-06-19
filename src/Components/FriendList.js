import React, { useState } from 'react'
import Friend from './Friend'

const FriendList = ({data,onSelection,selected}) => {
  return (
    <div className='sidebar'>
        <ul>
            {data.map((elem,i)=>{
                return <Friend friend={elem} selected={selected} onSelection={onSelection} key={i}/>
            })}
        </ul>
    </div>
  )
}

export default FriendList