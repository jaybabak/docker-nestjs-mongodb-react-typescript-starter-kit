import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface HeroBannerProps {
  data: {
    description: string;
    image: string;
    imageText: string;
    linkText?: string;
    title: string;
  };
}

export default function HeroBanner(props: HeroBannerProps) {
  const { data } = props;

  return (
    <Paper
      elevation={2}
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mt: 4,
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${data.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={data.image} alt={data.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {data.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {data.description}
            </Typography>
            { data?.linkText ? <Link variant="subtitle1" href="#">{data.linkText}</Link> : null}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}