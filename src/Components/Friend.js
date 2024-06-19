import React from 'react'

const Friend = ({friend,onSelection,selected}) => {
  const isSelected = selected?.id === friend.id;
  return (
    
    <li className={(isSelected)? "selected":""}>
          <img src={friend.image}/>
          <h3>{friend.name}</h3>
          {friend.balance<0 && (<p className='red'>You owe {friend.name} {Math.abs(friend.balance)} ₹</p>)}
          {friend.balance>0 && (<p className='green'>{friend.name} owe's you {friend.balance} ₹</p>)}
          {friend.balance===0 && (<p>You and {friend.name} are even</p>)}
          <button className='button' onClick={()=>onSelection(friend)}>{(isSelected) ? "Close" : "Select"}</button>
    </li>
  )
}

export default Friend