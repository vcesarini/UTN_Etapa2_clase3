import { useEffect, useState } from "react";
import { Product } from "../../types/Products";
import { ProductService } from "../../services/ProductService";
import { Button, Card, Container, ListGroup, Row } from "react-bootstrap";
import './productTable.css'

const ProductTable = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

    const fetchProducts = async () => {
        const products = await ProductService.getProducts();
        setProducts(products);
        //setIsLoading(false);
        };
        
        fetchProducts();
        
    }, []);
    console.log(JSON.stringify(products, null, 2));

    return (
    <>
    <Container>
        <Row className='d-flex justify-content-center mb-5'>
        {products.map(product => (
            <Card key={product.id} style={{ width: '18rem', margin:'4px' }}>
                <Card.Text>
                    SKU: 00{product.id} | Categoría: {product.category}
                </Card.Text>
                <Card.Img variant="top" src={product.image} alt={product.title} className="w-100 ImgProduct"/>
                <Card.Body>
                <Card.Title className="ellipsis">{product.title}</Card.Title>
                <Card.Text className="multiline-ellipsis">
                    {product.description}
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><h2>$ {product.price}</h2></ListGroup.Item>
                </ListGroup>
                <Button href={`/productodetalle/${product.id}`}>VER DETALLE</Button>
                </Card.Body>
            </Card>
            ))}
        </Row>
    </Container>
    </>
    )
}

export default ProductTable