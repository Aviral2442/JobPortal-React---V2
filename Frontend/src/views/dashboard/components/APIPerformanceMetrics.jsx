import { Card, CardBody, CardFooter, CardHeader, CardTitle, Table } from 'react-bootstrap';
import { apiPerformanceMetricsTable } from '@/views/dashboard/data';
const APIPerformanceMetrics = () => {
  return <Card>
            <CardHeader className="border-dashed">
                <CardTitle as="h4" className="mb-0">
                    AI API Performance Metrics
                </CardTitle>
            </CardHeader>

            <CardBody className="p-0">
                <Table responsive size="sm" className="table-centered table-nowrap table-custom mb-0">
                    <thead className="bg-light-subtle thead-sm">
                    <tr className="text-uppercase fs-xxs">
                        {apiPerformanceMetricsTable.headers.map(header => <th key={header}>{header}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {apiPerformanceMetricsTable.body.map((row, idx) => <tr key={idx}>
                            <td>{row.endpoint}</td>
                            <td>{row.latency}</td>
                            <td>{row.requests}</td>
                            <td>{row.errorRate}%</td>
                            <td>{row.cost}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </CardBody>

            <CardFooter className="border-top-0 text-end">
                <span className="text-muted">API stats updated: 2025-06-16 08:32 AM</span>
            </CardFooter>
        </Card>;
};
export default APIPerformanceMetrics;