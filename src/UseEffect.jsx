import { useEffect, useState } from 'react'
import './App.css'


const Card = ({title}) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been Liked: ${hasLiked}`);
  }, [hasLiked]);

  //rendered once when the component called
  useEffect(() => {
    console.log("Card have been rendered");
  }, []);

  return (
    <div className='card ' onClick={() => setCount((prevState) => prevState + 1)}>
      <h2>{title} <br/> {count ? count : null}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked? "Liked💛":"Like❤️"}
      </button>
    </div>
  )
}

const UseEffect = () => {
  return (
    <div className='car-container'>
      <Card title="star war" rating={5} isCool={true} actors={[{name: "Actors"}]}/>
      <Card title="avatar"/>
      <Card title="in the land"/>
    </div>
  )
}

export default UseEffect
