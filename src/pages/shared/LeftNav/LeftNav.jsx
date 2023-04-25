import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsights from '../../News/EditorsInsights/EditorsInsights';
import { Card, Col } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
            </div>
            <div>
                {/* <EditorsInsights></EditorsInsights> */}
                <Col className='mb-4'>
          <Card>
            <Card.Img variant="top" src={first}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text style={{fontSize: '18px'}}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-4'>
          <Card>
            <Card.Img variant="top" src={second}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text style={{fontSize: '18px'}}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-4'>
          <Card>
            <Card.Img variant="top" src={third}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text style={{fontSize: '18px'}}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
            </div>
        </div>
    );
};

export default LeftNav;