import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { gql,useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import "./MiniShop.css"
import { Spin } from 'antd';

const GET_10_PLANTS = gql`
    query {
        getPlants12 {
            id
            price
            image
        }
    }
`;

function MiniShop() {
    const { loading, error, data } = useQuery(GET_10_PLANTS);
    if(loading) return (<Spin />);
    if(error) return (<p>{error.message}</p>)
    return (
      <div className='plantMiniShopArea'>
          <Container className="plantShop-container">
                <Row>
                {
                        data?.getPlants12?.map(plant => (
                          <Col lg={2} key={plant.id}><span className='single-plant'><img src={plant.image}/>
                          <div className="shop-hover-content">
                              <p className="price">Price: ${plant.price}</p>
                              <Link className='buyNow' to={`/plant/${plant.id}`}>Buy Now</Link>
                          </div>
                          </span></Col>
                        ))
                      }
                </Row>
                <Row>
                <span className="seeMore"><Link  to={`/plant/`}>See More Products</Link></span> 
                </Row>
          </Container>
      </div>
    )
}

export default MiniShop