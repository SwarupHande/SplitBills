import React, { useState } from 'react'

const SplitBill = ({selectedFriend,onSplit}) => {
    const [amt,setAmt] = useState(0);
    const [selfAmt,setSelfAmt] = useState(0);
    const frndAmt = amt ? amt - selfAmt : "" ; 
    const [whosePaying,setWhosePaying] = useState ("user");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!amt || !selfAmt) return;
        onSplit(whosePaying === "user" ? frndAmt : -selfAmt);
        setAmt(0);
        setSelfAmt(0);
    }
  return (
    <div>
        <form action="Submit" className='form-split-bill' onSubmit={handleSubmit}>
            <h2>Split A Bill With {selectedFriend.name}</h2>
            <label>💰 Bill Value</label>
            <input type="text" placeholder='Enter Amount' value={amt} onChange={(e)=>{
                setAmt(Number(e.target.value));
            }}/>
            <label>👻 Your Expense : </label>
            <input type="text" value={selfAmt} onChange={(e)=>{
                setSelfAmt(Number(e.target.value) > amt ? selfAmt : Number(e.target.value));
            }}/>
            <label>🧍{selectedFriend.name}'s Expense : </label>
            <input type="text" disabled value={frndAmt}/>
            <label>🫣 Who is paying the bill ? </label>
            <select name="your" value={whosePaying} onChange={(e)=>{setWhosePaying(e.target.value)}}>
                <option value="user">You</option>
                <option value="frnd">{selectedFriend.name}</option>
            </select>
            <button className="button">Split Bill</button>
        </form>
    </div>
  )
}
export default SplitBill