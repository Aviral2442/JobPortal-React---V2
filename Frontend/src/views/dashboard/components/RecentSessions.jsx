import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Pagination, Row, Table } from 'react-bootstrap';
import { TbChevronLeft, TbChevronRight, TbCircleFilled, TbDotsVertical, TbFileExport, TbPlus } from 'react-icons/tb';
import { sessions } from '@/views/dashboard/data';
import { Link } from 'react-router';
import { toPascalCase } from '@/helpers/casing';
const RecentSessions = () => {
  return <Card>
            <CardHeader className="justify-content-between align-items-center border-dashed">
                <CardTitle as="h4" className="mb-0">
                    Recent AI Sessions
                </CardTitle>
                <div className="d-flex gap-2">
                    <Button variant="light" size="sm">
                        <TbPlus className="me-1" /> New Session
                    </Button>
                    <Button variant="primary" size="sm">
                        <TbFileExport className="me-1" /> Export Logs
                    </Button>
                </div>
            </CardHeader>

            <CardBody className="p-0">
                <Table responsive hover size="sm" className="table-custom table-centered table-sm table-nowrap mb-0">
                    <tbody>
                    {sessions.map(session => <tr key={session.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img src={session.user.avatar} alt="" className="avatar-sm rounded-circle me-2" height={32} width={32} />
                                    <div>
                                        <span className="text-muted fs-xs">{session.user.name}</span>
                                        <h5 className="fs-base mb-0">
                                            <Link to="" className="text-body">
                                                {session.id}
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-muted fs-xs">Model</span>
                                <h5 className="fs-base mb-0 fw-normal">{session.aiModel}</h5>
                            </td>
                            <td>
                                <span className="text-muted fs-xs">Date</span>
                                <h5 className="fs-base mb-0 fw-normal">{session.date}</h5>
                            </td>
                            <td>
                                <span className="text-muted fs-xs">Tokens</span>
                                <h5 className="fs-base mb-0 fw-normal">{session.tokens}</h5>
                            </td>
                            <td>
                                <span className="text-muted fs-xs">Status</span>
                                <h5 className="fs-base mb-0 fw-normal">
                                    <TbCircleFilled className={`fs-xs ${session.status === 'failed' ? 'text-danger' : ''}`} />
                                    {toPascalCase(session.status)}
                                </h5>
                            </td>
                            <td style={{
              width: '30px'
            }}>
                                <Dropdown align="end">
                                    <DropdownToggle as="a" role="button" className="dropdown-toggle text-muted drop-arrow-none card-drop p-0">
                                        <TbDotsVertical className="fs-lg" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>View Details</DropdownItem>
                                        <DropdownItem>Delete</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
            </CardBody>

            <CardFooter className="border-0">
                <Row className="align-items-center justify-content-between text-center text-sm-start">
                    <Col className="col-sm">
                        <div className="text-muted">
                            Showing <span className="fw-semibold">1</span> to <span className="fw-semibold">10</span> of <span className="fw-semibold">2684</span>{' '}
                            Sessions
                        </div>
                    </Col>
                    <Col className="col-sm-auto mt-3 mt-sm-0">
                        <Pagination size="sm" className="pagination-boxed mb-0 justify-content-center">
                            <Pagination.Prev>
                                <TbChevronLeft />
                            </Pagination.Prev>
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Next>
                                <TbChevronRight />
                            </Pagination.Next>
                        </Pagination>
                    </Col>
                </Row>
            </CardFooter>
        </Card>;
};
export default RecentSessions;