import { Col, Row } from 'react-bootstrap';
import PageMeta from "@/components/PageMeta";
const PageTitle = ({
  title,
  subtitle,
  badge
}) => {
  return <>
            <PageMeta title={title} />
            <Row className="justify-content-center py-5">
                <Col xxl={5} xl={7} className="text-center">
                    {badge && <span className="badge badge-default fw-normal shadow px-2 py-1 mb-2 fst-italic fs-xxs">
                        <badge.icon className="fs-sm me-1" />
                            {badge.title}
                    </span>}
                    <h3 className="fw-bold">{title}</h3>
                    {subtitle && <p className="fs-md text-muted mb-0">{subtitle}</p>}
                </Col>
            </Row>
        </>;
};
export default PageTitle;