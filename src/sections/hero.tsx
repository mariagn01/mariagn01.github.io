import { Container, Box } from '@mui/material';

export default function Hero() {
  return (
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', mt: 10 }}>
          <h1>Maria Granli</h1>
          <p>I’m a software engineering student from Oslo, currently in my
              third year, working on developing my technical understanding and
              skills. I also have experience in web development and graphic
              design from my previous bachelor’s degree in media and
              communication. </p>
      </Container>
  );
}