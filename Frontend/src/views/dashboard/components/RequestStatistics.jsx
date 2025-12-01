import { Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap';
import { LuBot, LuCalendar, LuClock, LuTimer } from 'react-icons/lu';
import CustomChartJS from '@/components/CustomChartJS';
import { activeUsersChart } from '@/views/dashboard/data';
import { Filler, LineController, LineElement, PointElement } from 'chart.js';
import CountUp from "react-countup";
const RequestStatistics = () => {
  return <Card>
            <CardBody>
                <Row className="align-items-center">
                    <Col xl={3} md={6}>
                        <div className="text-center">
                            <p className="mb-4">
                                <LuBot /> AI Requests
                            </p>
                            <h2 className="fw-bold mb-0">
                            <span>
                              <CountUp end={807621} duration={2} enableScrollSpy scrollSpyOnce />
                            </span>
                            </h2>
                            <p className="text-muted">Total AI requests in last 30 days</p>
                            <p className="mb-0 mt-4">
                                <LuCalendar /> Data from May
                            </p>
                        </div>
                    </Col>

                    <Col xl={3} md={6} className="order-xl-last">
                        <div className="text-center">
                            <p className="mb-4">
                                <LuTimer /> Usage Duration
                            </p>
                            <h2 className="fw-bold mb-0"> 9 Months</h2>
                            <p className="text-muted">Including 4 weeks this quarter</p>
                            <p className="mb-0 mt-4">
                                <LuClock /> Last accessed: 12.06.2025
                            </p>
                        </div>
                    </Col>

                    <Col xl={6}>
                        <div className="w-100" style={{
            height: '240px'
          }}>
                            <CustomChartJS type="line" getOptions={activeUsersChart} plugins={[LineController, LineElement, PointElement, Filler]} />
                        </div>
                    </Col>
                </Row>
            </CardBody>

            <CardFooter>
                <div className="d-flex align-items-center text-muted justify-content-between">
                    <div>Last update: 16.06.2025</div>
                    <div>You received 2 new AI feedback reports</div>
                </div>
            </CardFooter>
        </Card>;
};
export default RequestStatistics;