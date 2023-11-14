import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from "../../services/ProductService";
import { Container, Row, Col, Image } from 'react-bootstrap';
import './productodetalle.css'

const ProductoDetalle = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
            const productDetailData = await ProductService.getProduct(productId);
            setProduct(productDetailData);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product && (
        <Container className='p-5'>
            <Row>
                <Col className='mb-5'><h3>{product.title}</h3></Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={product.image} rounded className='w-100 ImgProduct' />
                </Col>
                <Col>
                    <p>{product.description}</p>
                    <h3>Precio: $ {product.price}</h3>
                </Col>
                <Col>
                    <h6>SKU: 00{product.id}</h6>
                    <h6>{product.category}</h6>
                    <h6>{product.rating.rate}</h6>
                    <h6>{product.rating.count}</h6>
                </Col>
            </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductoDetalle;
