import { Card, CardBody, CardFooter } from 'react-bootstrap';
import { LuActivity } from 'react-icons/lu';
import CustomChartJS from '@/components/CustomChartJS';
import { accuracyChart } from '@/views/dashboard/data';
import { ArcElement, PieController } from 'chart.js';
const ResponseAccuracy = () => {
  return <Card className="card-h-100">
            <CardBody>
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <h5 className="text-uppercase">Response Accuracy</h5>
                    </div>
                    <div>
                        <LuActivity className="text-muted fs-24 svg-sw-10" />
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-center">
                    <CustomChartJS type="pie" getOptions={accuracyChart} plugins={[PieController, ArcElement]} style={{
          maxHeight: '120px'
        }} />
                </div>
            </CardBody>
            <CardFooter className="text-muted text-center">
                Current accuracy: <strong>94.3%</strong>
            </CardFooter>
        </Card>;
};
export default ResponseAccuracy;