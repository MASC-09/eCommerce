import React from 'react'
import * as api from '../services/Api';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardMedia from '@mui/material/CardMedia';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Home = () => {
  const [spacing, setSpacing] = React.useState(2);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? games.length - 1 : newIndex);
  }

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex % games.length);
  }

  const paginationNum = 3;

  const handleChange = (event, value) => {
    setCurrentIndex(value -1);
  };

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  const games = [
    {name: "Halo 3",
    image: 'https://cdn.vox-cdn.com/thumbor/oFM-rZEfJNCTrCPerSLKNk-f08U=/0x0:1857x1106/1820x1213/filters:focal(443x235:739x531):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67025788/halo_3.6.jpg',
    description: "The best Game ever made",
    genre:"Action First Person Shooter"},
    {name: "Escape From Tarkov",
    image: 'https://blog.turtlebeach.com/wp-content/uploads/2022/05/Escape-From-Tarkov-1024x576.jpeg',
    description: "The best extraction Royale",
    genre:"Action First Person Shooter"},
    {name: "Dark Souls",
    image: 'https://static.bandainamcoent.eu/high/dark-souls/brand-setup/ds3_thumb_brand_624x468.jpg',
    description: "The Game that popularized the term Souls Like",
    genre:"Hard Core Third Person Action Game"},
    {name: "Harry Potter: Hogwards Legacy",
    image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/D7X7Q25XSZHTBP6NOB4BWQ4EOI.jpg',
    description: "New Game based in the Harry Potter World. 200 years prior to the events of the movies.",
    genre:"Third Person Action Game"}
  ];


  return (
    <Grid sx={{ flexGrow: 1, m:2}} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {games.slice(0, paginationNum).map((game) => (    //especify the ammount of elements to show in the carousel here.
            
            <Grid key={game} item>
              
              <Card sx={{ width: 300, height:350 }}>
                <CardContent>
                  
                  <CardMedia
                  sx={{ height: 150 }}
                  image={game.image}
                  // title="green iguana"
                  />

                  {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {game.name}
                  </Typography> */}
                  <Typography variant="h5" component="div" sx={{marginTop:3}}>
                    {game.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {game.description}
                  </Typography>
                  <Typography variant="body2">
                    {game.genre}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </Grid>
            
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{mt:2 , mb:5}}>
        <Grid item>
        <Stack spacing={2}>
        <Pagination 
                    // count={3} 
                    size="large"  
                    // onChange={handleChange} 
                    count={games.length}
                    page={currentIndex + 1}
                    onChange={(event, value) => setCurrentIndex(value - 1)}/>
        </Stack>
        </Grid>
      </Grid>

      <Box sx={{ width: '100%', mb:2 }} >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }} justify="center" aligngames="center">

       {games.map((game) => (
            <Grid key={game} item xs={6}>
              
              <Card sx={{ width: 500, height:400 }} >
                <CardContent>
                  <CardMedia
                  sx={{ height: 250 }}
                  image={game.image}
                  />
                  <Typography variant="h5" component="div" sx={{marginTop:3}}>
                    {game.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {game.description}
                  </Typography>
                  <Typography variant="body2">
                    {game.genre}
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
            
          ))}
      </Grid>
    </Box>

    </Grid>

  );
}

export default Home;