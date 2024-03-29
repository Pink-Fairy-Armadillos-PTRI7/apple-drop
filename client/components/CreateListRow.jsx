import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const CreateListRow = ({ name, description, price, src, link }) => {
  return (
    <>
      <img
        style={{
          objectFit: 'cover',
          height: 300,
          width: '100%',
          borderRadius: 4,
        }}
        src={src}
      />
      <Box sx={{ minWidth: 275 }}>
        <Card
          variant="outlined"
          style={{ height: 300, background: 'none', border: 'none' }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              ${parseInt(price).toFixed(2)}/ea
            </Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            {link ? (
              <Button
                color="orange"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 'auto', mr: 'auto' }}
              >
                <Link
                  href={link}
                  target="_blank"
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Donate
                </Link>
              </Button>
            ) : null}
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CreateListRow;
