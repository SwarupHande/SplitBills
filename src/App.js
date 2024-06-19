import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FriendList from "./Components/FriendList";
import SplitBill from "./Components/SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

 
const App = () => {
  const [data,setData] = useState([...initialFriends]);
  const [isOpen,setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  // const [userName, setUserName] = useState("");
  const handleSelect = (friend) =>{
    setSelected((curr)=>curr?.id===friend.id?null:friend);
    setIsOpen(false);
  }
  const handleAdd = () =>{
    setIsOpen(!isOpen);
  }
  const handleSplitBill = (bill)=>{
    setData((data) => data.map((friend)=> friend.id === selected.id ? {...friend,balance:friend.balance+bill}:friend));
    setSelected(null);
  } 
  
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList data={data} onSelection={handleSelect} selected={selected}/>
        {isOpen && <FormAddFriend data={data} setData={setData}/>} 
        <button className="button" onClick={handleAdd}>
          {(!isOpen) ? "Add Friend" : "Close"}
        </button>
      </div>
      <div>
        {selected && <SplitBill selectedFriend={selected} onSplit={handleSplitBill}/>}
      </div>
    </div>
  )
}

export default App