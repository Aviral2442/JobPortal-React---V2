import { Card, CardBody, CardFooter, CardHeader, CardTitle, Table } from 'react-bootstrap';
import { modelUsageTable } from '@/views/dashboard/data';
const ModelUsageSummary = () => {
  return <Card>
            <CardHeader className="border-dashed">
                <CardTitle as="h4" className="mb-0">
                    AI Model Usage Summary
                </CardTitle>
            </CardHeader>

            <CardBody className="p-0">
                <Table size="sm" responsive className="table-centered table-custom table-nowrap mb-0">
                    <thead className="bg-light-subtle thead-sm">
                    <tr className="text-uppercase fs-xxs">
                        {modelUsageTable.headers.map(header => <th key={header}>{header}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {modelUsageTable.body.map((row, idx) => <tr key={idx}>
                            <td>{row.model}</td>
                            <td>{row.requests}</td>
                            <td>{row.totalTokens}</td>
                            <td>{row.averageTokens}</td>
                            <td>{row.lastUsed}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </CardBody>

            <CardFooter className="border-top-0 text-end">
                <span className="text-muted">Updated 1 hour ago</span>
            </CardFooter>
        </Card>;
};
export default ModelUsageSummary;