import { Spinner } from 'react-bootstrap';
const Loader = ({
  height = '100%',
  width = '100%',
  overlay = false
}) => {
  return <div className="position-relative d-flex justify-content-center align-items-center p-3" style={{
    height: height,
    width: width
  }}>
      <Spinner animation="border" variant="primary" className="position-absolute" style={{
      zIndex: 2
    }} />
      {overlay && <div className="card-overlay" style={{
      zIndex: 1
    }} />}
    </div>;
};
export default Loader;