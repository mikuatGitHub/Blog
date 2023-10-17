import Container from 'components/container'
import Hero from 'components/hero'
import { TwoColumn,TwoColumnMain,TwoColumnSide } from 'components/twocolumn'
import Post from 'components/post'
import Contact from 'components/contact'

export default function About() {
  return (
    <div>
      <Container>
        <Hero title="About" subtitle="About development activities"></Hero>

        <TwoColumn>
          <TwoColumnMain>
            <Post></Post>
          </TwoColumnMain>
          <TwoColumnSide>
            <Contact></Contact>
          </TwoColumnSide>
        </TwoColumn>
      </Container>
    </div>
  )
}
