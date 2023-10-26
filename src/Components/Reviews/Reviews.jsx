import { Box } from '@mui/material/';
import { reviewsData } from 'Constants/Constants';
const Reviews = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '35%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {reviewsData.map(({ id, review, owner }) => (
          <Box
            key={id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '170px',
              gap: '15px',
              mb: '30px',
            }}
          >
            <img
              style={{ width: '3rem' }}
              src="https://uploads-ssl.webflow.com/647f46aecdda0a52b4531fb7/64808b82f32d469e9c180333_quote.svg"
              alt="quote"
              loading="lazy"
            />
            <Box sx={{ fontWeight: 600 }}>{review}</Box>
            <Box>— {owner}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
