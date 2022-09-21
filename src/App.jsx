import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from './json/users.json'
import CardUsers from './components/CardUsers'

function App() {
  const [randomUser, setRandomUser] = useState(0)
  
  const changeRandomUser = ()=>{
    setRandomUser(getRandomElement(users))
  }

 const getRandomElement = array =>{
  const random = Math.floor(Math.random() * array.length)
  return random
  }

  const getRandomColor = ()=>{
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor
  }
  
  const color = getRandomColor();

  return (
    <div className="App"   style={{backgroundColor:`${color}`, color:`${color}`}}>
      <CardUsers randomUser={randomUser} changeRandomUser={changeRandomUser} colorBtn={`${color}`}/>
      {/* <h1>HOLA EJERCICIO2:  {getRandomColor()}</h1> */}
      {/* <div className='card'>
        <h1>{`${users[randomUser].name.title} ${users[randomUser].name.first} ${users[randomUser].name.last}`}</h1>
        <img src={`${users[randomUser].picture.large}`} alt="perfil" />
        <div className='card-body'>
          <p><i class='bx bxs-envelope'></i> {`${users[randomUser].email}`}</p>
          <p><i class='bx bxs-phone-call' ></i> {`${users[randomUser].cell}`}</p>
          <p><i class='bx bx-directions'></i> {`${users[randomUser].country} ${users[randomUser].city} ${users[randomUser].state}`}</p>
          
        </div>
        <button onClick={getRandomUser}>next</button>
      </div> */}
    </div>
  )
}

export default App
