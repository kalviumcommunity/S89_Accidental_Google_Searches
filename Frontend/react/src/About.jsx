import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './Components/ProductCard';


const About = () => {

  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/userDetails')
      .then(res => res.json())
      .then(data => setData(data.msg))
      .catch(err => console.error(err));
  }, []);

  const dummyProduct = {
    name: 'Organic Tomato Seeds',
    category: 'Seeds',
    price: 120,
    description: 'High yield seeds for summer crops',
  };
  return (
    <div>
        <h1>Project Title: 🤣🤣Accidental Goggle Searches Archive🤣🤣
        </h1>
        <h2>Project Overview: <p>This is a fun, user-generated archive where people can log in and submit the funniest or weirdest Google search mistakes they have made. Other users can upvote/downvote the most hilarious searches, comment on them, and even see a leaderboard of the top accidental searches.</p></h2>
          <button>Know more 😊</button>
          <div style={{display: "flex", justifyContent: "space-around", marginTop: "20px"}}>
       
       <ProductCard {...dummyProduct}/>
      </div>

    </div>
  )
}

export default About