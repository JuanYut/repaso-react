import React from 'react'

import './home.css'

import Card from '../../components/Card/Card'
import Users from '../../components/UsersFunctional'

const Home = () => {
  return (
    <div className="home">
      <h2>H O M E</h2>

      <Card
        imgUrl="https://pbs.twimg.com/profile_images/667128409789759488/ZafvuEpz_400x400.jpg"
        title="Titulo"
        description="Descripcion"
      />

      <Users />
      
    </div>
  )
}

export default Home
