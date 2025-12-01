import { Card, CardBody, CardFooter } from 'react-bootstrap';
import { LuCpu } from 'react-icons/lu';
import { TbArrowUp } from 'react-icons/tb';
import { tokenUsageChart } from '@/views/dashboard/data';
import CustomChartJS from '@/components/CustomChartJS';
import { Filler, LineController, LineElement, PointElement } from 'chart.js';
import CountUp from "react-countup";
const TokenUsage = () => {
  return <Card className="card-h-100">
            <CardBody>
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <h5 className="text-uppercase">Token Usage</h5>
                    </div>
                    <div>
                        <LuCpu className="text-muted fs-24 svg-sw-10" />
                    </div>
                </div>

                <div className="mb-3">
                    <CustomChartJS type="line" getOptions={tokenUsageChart} plugins={[LineController, LineElement, PointElement, Filler]} height={16} />
                </div>

                <div className="d-flex justify-content-between">
                    <div>
                        <span className="text-muted">Today</span>
                        <div className="fw-semibold">
                            <span>
                              <CountUp end={920400} duration={2} enableScrollSpy scrollSpyOnce />
                            </span>{' '}
                            tokens
                        </div>
                    </div>
                    <div className="text-end">
                        <span className="text-muted">Yesterday</span>
                        <div className="fw-semibold">
                            <span>
                              <CountUp end={865100} duration={2} enableScrollSpy scrollSpyOnce />
                            </span>
                            <TbArrowUp />
                        </div>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="text-muted text-center">
                Token usage up <strong>6.4%</strong> from yesterday
            </CardFooter>
        </Card>;
};
export default TokenUsage;