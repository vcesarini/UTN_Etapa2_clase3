import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from '../../services/ProductService';
import { Container, Row, Col, Image, Spinner, Alert } from 'react-bootstrap';
import { ProductDetail } from '../../types/ProductDetail';
import './productodetalle.css';

const ProductoDetalle: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) {
          throw new Error("Product ID is missing");
        }
        const productDetailData = await ProductService.getProduct(Number(productId));
        setProduct(productDetailData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

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
              <h6>Rating: {product.rating.rate}</h6>
              <h6>Reviews: {product.rating.count}</h6>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductoDetalle;
