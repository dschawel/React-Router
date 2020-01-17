import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const Projects = (props) => {
  return (
    <div className='projects'>
        <Row>
            <Col sm="6">
                <Card body>
                <CardTitle><strong>Project 1</strong></CardTitle>
                <CardText>Recreated the classic boardgame Mastermind using HTML5, CSS & Javascript.</CardText>
                <Button>Visit Mastermind</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle><strong>Project 2</strong></CardTitle>
                <CardText>Created a digital scrapbook using Node, Express Javascript, PostgreSQL and Sequelize.</CardText>
                <Button>Visit Digital Scrapbook</Button>
                </Card>
            </Col>
        </Row>
    </div>
    );
};

export default Projects