import React from 'react'
import users from '../json/users.json'

const CardUsers = ({randomUser,changeRandomUser,colorBtn}) => {
  // const  color = colorCard();
  return (
    <div >
      {/* <h1>este es el color RANDOM: {color}</h1> */}
      <div className='card' /* style={{color:`${color}`}}*/>
        <h1>{`${users[randomUser].name.title} ${users[randomUser].name.first} ${users[randomUser].name.last}`}</h1>
        <img src={`${users[randomUser].picture.large}`} alt="perfil" />
        <div className='card-body'>
          <p><i className='bx bxs-envelope'></i> {`${users[randomUser].email}`}</p>
          <p><i className='bx bxs-phone-call' ></i> {`${users[randomUser].cell}`}</p>
          <p><i className='bx bx-directions'></i> {`${users[randomUser].country} ${users[randomUser].city} ${users[randomUser].state}`}</p>        
        </div>
        <button className='btn' style={{backgroundColor:`${colorBtn}`}} /* style={{backgroundColor:`${color}`}}*/onClick={changeRandomUser}><i class='bx bxs-skip-next-circle'></i></button>
      </div>
    </div>
  )
}

export default CardUsers