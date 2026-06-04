import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  
  return (
    <div className='card '>
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(true)}>
        Like
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className='car-container'>
      <Card title="star war" rating={5} isCool={true} actors={[{name: "Actors"}]}/>
      <Card title="avatar"/>
      <Card title="in the land"/>
    </div>
  )
}

export default App
