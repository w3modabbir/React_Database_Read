import { useState } from 'react'
import { getDatabase, ref, set, push } from "firebase/database";


function App() {
  const db = getDatabase();

  let [text, setText] = useState({
    firstname: "",
    email: "",
    phone: "",
    password: ""
  })

  let handleFrom = (e) =>{
   let {name, value} = e.target;
   setText({...text, [name]:value});
  }
  let handleSubmite = (e) =>{
    e.preventDefault()
    set(push(ref(db, "reacttodo")), {
      todotext: text,
    })
  }

  return (
    <>
      <form className='from'>
        <input name='firstname' type='name' placeholder='Enter Your Name' onChange={handleFrom}/>
        <input name='email' type='email' placeholder='Enter Your Email' onChange={handleFrom}/>
        <input name='phone' type='phone' placeholder='Enter Your Mobile Number' onChange={handleFrom}/> 
        <input name='password' type='password' placeholder='Enter Your Password' onChange={handleFrom}/>
        <button onClick={handleSubmite}>Submite</button>
      </form>
    </>
  )
}

export default App
