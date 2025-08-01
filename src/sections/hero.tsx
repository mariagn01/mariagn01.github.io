import { Container, Typography } from '@mui/material';

export function Hero() {
  return (
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', mt: 10 }}>
          <h1>Maria Granli</h1>
          <Typography sx={{ fontSize: '24px' }}>I’m a software engineering student from Oslo, currently in my
              third year, working on developing my technical understanding and
              skills. I also have experience in web development and graphic
              design from my previous bachelor’s degree in media and
              communication. </Typography>
      </Container>
  );
}