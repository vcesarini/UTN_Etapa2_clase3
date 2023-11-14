import { Container, Row } from "react-bootstrap"
import HeroImage from "../components/HeroImage/HeroImage"
import ProductTable from "../components/ProductTable/ProductTable"

const Home = () => {
  return (
    <>
      <HeroImage url="https://fakeimg.pl/1920x300/ff9200/ffffff?text=Productos" />
      <Container className="mt-5">
        <Row className='d-flex justify-content-center'>
          <ProductTable/>
        </Row>
      </Container>
    </>
  )
}

export default Home