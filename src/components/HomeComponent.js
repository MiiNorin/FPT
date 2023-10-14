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
                <div style={{textAlign: 'left'}}>Date: {item.date}</div>
                <CardText style={{ textAlign: 'justify', display: 'flex' }}>{item.description}</CardText>
            </CardBody>
            <div style={{ paddingBottom: '10px' }}>
                <Link to={{ pathname: "/contactus", state: { item: item } }}>
                    <Button
                        onClick={() => setShowDetails(!showDetails)}
                        >More</Button>
                    
                </Link>
            </div>
        </Card>

    );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                {props.new.map((item) => (
                    <div key={item.id} className="col-md-4 col-12 mb-3">
                        <RenderCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
