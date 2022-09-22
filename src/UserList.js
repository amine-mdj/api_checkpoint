import React,{useState, useEffect} from 'react'
import axios from 'axios'

const UserList = () =>{
 const [listOfUser, setlistOfUser] = useState([])

 
 const getData = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setlistOfUser(data);
  };


  useEffect(() => {
    getData();
  }, []);


  return(
    <div>{listOfUser.map((item)=><li>{item.name}</li>)}</div>
    
  )
}


export default UserList