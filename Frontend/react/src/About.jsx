import React, { useEffect, useState } from 'react';
import ProductCard from './Components/ProductCard';

const About = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/userDetails/getUser') // Update to match your real API endpoint
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => {
        console.error(err);
        setError('Something went wrong while loading products.');
      });
  }, []);

  return (
    <div>
      <h1>Project Title: 🤣🤣 Accidental Google Searches Archive 🤣🤣</h1>
      <h2>
        Project Overview:
        <p>
          This is a fun, user-generated archive where people can log in and submit the funniest or weirdest Google search mistakes they have made.
          Other users can upvote/downvote the most hilarious searches, comment on them, and even see a leaderboard of the top accidental searches.
        </p>
      </h2>

      <button>Know more 😊</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default About;
