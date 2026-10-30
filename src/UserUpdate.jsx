import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import axios from "axios"

export default function UserUpdate() {

    let { id } = useParams()
    let navigate=useNavigate()

    // console.log(id)

    let url = "http://localhost:3000/users";

    let [name, setName] = useState("")
    let [age, setAge] = useState("")


    async function getUser() {
        let response = await fetch(url + id)
        response = await response.json()
        setName(response.name)
        setAge(response.age)

       
    }

    useEffect(() => {
        getUser()
    }, [])


     async function updateUser() {

        // console.log(name,age)

        try{
            await axios.put(url+id,{name,age})
            alert("user updated")
            navigate("/users")
        }catch(error){
            console.log(error)
        }

        // let response = await fetch(url + id, {
        //     method: 'PUT',
        //     body: JSON.stringify({ name, age })
        // });

        // console.log("updated")
        // response = await response.json()

        // console.log(response)

        // if(response){
        //     alert("user added")
        //     // console.log("updated")
        //     navigate("/users")
        // }else{
        //     alert("user not added")
        // }
    }


    return (
        <>
            <div className="border flex justify-center align-middle m-4">
                <div >
                    <label>Enter Name:</label>
                    <input className="border m-4 " type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter new Name.." /><br />
                    <label >Enter age: </label>
                    <input className="border m-4 " type="text" value={age} onChange={(event) => setAge(event.target.value)} placeholder="Enter new age.." /><br />
                    <button onClick={updateUser} className="border w-30 m-6 bg-blue-400" >Update</button>
                </div>
            </div>
        </>
    )
}