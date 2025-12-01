import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { appName, author, currentYear } from '@/helpers';
import PageMeta from "@/components/PageMeta";
const Page = () => {
  return <>
            <PageMeta title="404 Error" />
            <div className="auth-box overflow-hidden align-items-center d-flex">
                <Container>
                    <Row className="justify-content-center">
                        <Col xxl={4} md={6} sm={8}>
                            <Card>
                                <CardBody>
                                    <div className="p-2 text-center">
                                        <div className="text-error fw-bold fs-60">404</div>
                                        <h3 className="fw-semibold">Page Not Found</h3>
                                        <p className="text-muted">The page you’re looking for doesn’t exist or has been
                                            moved.</p>

                                        <Button variant="primary" className="mt-3 rounded-pill">
                                            Go Home
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>

                            <p className="text-center text-muted mt-4 mb-0">
                                © {currentYear} {appName} — by <span className="fw-semibold">{author}</span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>;
};
export default Page;