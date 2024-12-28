import React from 'react';
import { useNavigate } from 'react-router-dom';

const AhaFoods = () => {
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #FFF4E5, #FFD9D9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#CC5500',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.3s, background-color 0.3s',
  };

  const buttonHoverStyle = (bgColor) => ({
    backgroundColor: bgColor,
    transform: 'scale(1.05)',
  });

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Welcome to Aha Foods</h1>
        <button
          onClick={() => navigate('/App')}
          style={{
            ...buttonStyle,
            backgroundColor: '#FF6600',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#E65C00';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#FF6600';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Aha-Tiffins
        </button>
        <button
          onClick={() => navigate('/Grills')}
          style={{
            ...buttonStyle,
            backgroundColor: '#CC0000',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#990000';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#CC0000';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Aha Grills and Kebabs
        </button>
        <button
          onClick={() => navigate('/aha-foods')}
          style={{
            ...buttonStyle,
            backgroundColor: '#FFD700',
            color: 'black',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#FFC300';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#FFD700';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Aha Foods
        </button>
      </div>
    </div>
  );
};

export default AhaFoods;
