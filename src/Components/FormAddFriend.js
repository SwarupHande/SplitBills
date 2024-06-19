import React, { useState } from 'react'

const FormAddFriend = ({setData,data}) => {
  const [name,setName] = useState("");
  const [image,setImage] = useState("https://i.pravatar.cc/48");
  const handleSubmit= (e) =>{
    e.preventDefault();
    if(!name) return;
    const id = crypto.randomUUID();
    const newUser = {id,name,image:`${image}?=${id}`,balance:0};
    setData([...data,newUser]);
    setName('');
    setImage('https://i.pravatar.cc/48')
  } 
  return (
    <div>
        <form action="submit" className='form-add-friend' onSubmit={handleSubmit}>
            <label>🧑‍🤝‍🧑Friend Name: </label>
            <input type="text" placeholder="Name...." value={name}onChange={(e)=>{
              setName(e.target.value);
            }}/>
            <label>🏝️ Image URL</label>
            <input type="text" value={image} placeholder="URL"onChange={(e)=>{setImage(e.target.value)}}/>
            <button className="button">Add Friend</button>
        </form>
    </div>
  )
}

export default FormAddFriend