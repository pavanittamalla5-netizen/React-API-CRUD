import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function UserAdd(){

    let url="http://localhost:3000/users";

    let navigate=useNavigate()

    let[name,setName]=useState()
    let[age,setAge]=useState()

    async function addUser(){


        try{
            await axios.post(url,{name,age})
            alert("user added")
            navigate("/users")
        }catch(error){
            console.log(error)
        }

        // let response=await fetch(url,{
        //     method:'POST',
        //     body:JSON.stringify({name,age})
        // });

        // response = await response.json()

        // if(response){
        //     alert("user added")
        //     navigate("/users")
        // }else{
        //     alert("user not added")
        // }


        // response ? alert("user added") : alert("user not added")
    }

    return(
        <>
        <div>
            <h1>Add User</h1>

            <input className="border m-2" type="text" placeholder="Enter Name" onChange={(event)=> setName(event.target.value)}/><br /><br />

            <input className="border m-2" type="text" placeholder="Enter Age" onChange={(event)=> setAge(event.target.value)} /><br /><br />

            <button className="border w-30 m-2 bg-blue-400" onClick={addUser}>Add User</button>
        </div>
        </>
    )
}