import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderCard({ item }) {
    const [showDetails, setShowDetails] = React.useState(false);
    return (
        <Card style={{ marginTop: '10px' }}>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText style={{ textAlign: 'justify', display: 'flex' }}>{item.description}</CardText>
            </CardBody>
            <div style={{ marginBottom: '10px' }}>
                <Link to="/contactus"> 
                    <Button
                        onClick={() => setShowDetails(!showDetails)}
                        text="Xem thêm"
                        style={{ width: '100px', height: '30px', color: '#58257b' }}
                    />
                </Link>
            </div>
        </Card>

    );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                {props.promotion.map((item) => (
                    <div key={item.id} className="col-md-4 col-12 mb-3">
                        <RenderCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
