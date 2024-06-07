import Container from "@components/Container";
import clsx from "clsx";
import CanvasWrapper from "src/three/Canvas";

const HomePage = () => {
  return (
    <Container>
      <div className={clsx("h-screen")}>
        <div className={clsx("pt-[174px]", "text-56")}>
          <p className={clsx("")}>The power of</p>
          <p className={clsx("")}>Collective creativity</p>
        </div>
        <CanvasWrapper />
      </div>
    </Container>
  );
};

export default HomePage;
