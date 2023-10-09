import React from 'react';

const Reviews = () => {
  const reviewsData = [
    {
      id: Math.random(),
      review: 'Nothing short of exceptional.',
      owner: 'Lars from Likvido',
    },
    {
      id: Math.random(),
      review: 'A game-changer for our business.',
      owner: 'Emma from Studio Skulptur',
    },
    {
      id: Math.random(),
      review: 'UX Things goes above & beyond.',
      owner: 'Tim from Introcast',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {reviewsData.map(({ id, review, owner }) => (
        <div
          key={id}
          style={{
            display: 'flex',
            flexDirection: 'column',

            height: '170px',
            justifyContent: 'space-around',
          }}
        >
          <img
            style={{ width: '3rem' }}
            src="https://uploads-ssl.webflow.com/647f46aecdda0a52b4531fb7/64808b82f32d469e9c180333_quote.svg"
            alt="quote"
            loading="lazy"
          />
          <div>{review}</div>
          <div>— {owner}</div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
