  import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(()=>{
    getUsers();
  },[])

  const getUsers = () =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res=>{
        setUsers(res.data)
      })
      .catch(err => console.log(err.response))
  }
  const addUser = user =>{
    axios.post("https://users-crud1.herokuapp.com/users/",user)
      .then(res => getUsers())
      .catch(err => console.log(err.response))
  }
  const deleteUser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(res=>{
        getUsers()
      })
      .catch(err=>console.log(err.response))
  }
  const selectUser = (id) => {
    axios.get(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(res =>{
        setSelectedUser(res.data)
      })
      .catch(err=>console.log(err.response))
    handleModal()
  }

  const updateUser = (user) => {
    const data = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday: user.birthday
    }
    axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`,data)
      .then(res=>{
        console.log("!update",res.data)
        getUsers()
      })
      .catch(err=>console.log(err.response))
  }

  const handleModal = () =>{
    const btnModal = document.getElementById("btnModal");
    btnModal.click();
}


  return (
    <div className="App">
      <UsersForm addUser={addUser} handleModal={handleModal} selectedUser={selectedUser} updateUser={updateUser} />
      <UsersList users={users} deleteUser={deleteUser} selectUser={selectUser} />
    </div>
  );
}

export default App;
