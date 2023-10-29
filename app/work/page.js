// workページ
import Container from "components/container";
import Hero from "components/hero";
import Works from "components/works";

export default function Work() {

  return (
    <Container>
      <Hero title="Work" subtitle="これまでに作成したもの"></Hero>
      <Works></Works>
    </Container>
  );
}

export const metadata = {
  title: "work",
};
