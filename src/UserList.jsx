import { useState,useEffect } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

export default function UserList() {

    let [users, setusers] = useState([])
    let [loader, setLoader] = useState(false)

    let navigate=useNavigate()


    let url = "http://localhost:3000/users"

    async function getUsers() {

        try{
             let response = await axios.get(url)

             console.log(response.data)
              setusers(response.data)
              setLoader(false)
        }catch(error){
            console.log(error)
        }

        // let response = await fetch(url)

        // let data = await response.json()

        // console.log(data)

       
        
    }


    useEffect(() => {
        setLoader(true)
        getUsers()
    }, [])


    async function deleteUser(id){
        // console.log("clicked " + id)

        try{
            await axios.delete(url+id)
      
            alert("User deleted successfully")
            getUsers()

        }catch(error){
            console.log(error)
        }

        // let response=await fetch(url+id,{
        //     method:'DELETE',
        // })

        // response=await response.json()

       

    }


    // function for updating user 

    function editUser(id){
        navigate("/edit/" +id)
    }

return (
  <>
    <div className="p-5">

      <h1 className="text-3xl font-bold text-blue-700 mb-5">
        Getting Users Through API
      </h1>

      <ul className="flex justify-between bg-blue-200 p-3 font-bold">
        <li>First Name</li>
        <li>Age</li>
        <li>Action</li>
      </ul>

      {!loader ? (
        users.map((user) => (
          <ul
            key={user.id}
            className="flex justify-between border p-3 items-center"
          >
            <li>{user.name}</li>

            <li>{user.age}</li>

            <li className="flex gap-2">
              <button
                onClick={() => deleteUser(user.id)}
                className="border bg-red-500 text-white p-2"
              >
                Delete
              </button>

              <button
                onClick={() => editUser(user.id)}
                className="border bg-blue-500 text-white p-2"
              >
                Edit
              </button>
            </li>
          </ul>
        ))
      ) : (
        <h1>LOADING...</h1>
      )}

    </div>
  </>
)

        