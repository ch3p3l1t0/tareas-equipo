import { Container, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Panel de Control</Card.Title>
          <Card.Text>
            Bienvenido al panel de control.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
