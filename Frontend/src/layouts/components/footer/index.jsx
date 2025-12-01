import { appName, author, currentYear } from '@/helpers';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
  return <footer className="footer">
      {/* <Container fluid>
        <Row>
          <Col md={6} className="text-center text-md-start">
            © {currentYear} {appName} By <span className="fw-semibold">{author}</span>
          </Col>
          <Col md={6}>
            <div className="text-md-end d-none d-md-block">
              59.5GB of <span className="fw-bold">200GB</span> Free.
            </div>
          </Col>
        </Row>
      </Container> */}
    </footer>;
};
export default Footer;