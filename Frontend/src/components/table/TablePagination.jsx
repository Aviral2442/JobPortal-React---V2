import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

const TablePagination = ({
  currentPage,
  totalPages,
  itemsName = 'items',
  showInfo,
  previousPage,
  canPreviousPage,
  pageCount,
  pageIndex,
  setPageIndex,
  nextPage,
  canNextPage
}) => {

  return (
    <Row className={clsx('align-items-center text-center text-sm-start', showInfo ? 'justify-content-between' : 'justify-content-end')}>
      {showInfo && (
        <Col sm>
          <div className="text-muted">
            Showing page <span className="fw-semibold">{currentPage}</span> of <span className="fw-semibold">{totalPages}</span>
          </div>
        </Col>
      )}
      <Col sm="auto" className="mt-3 mt-sm-0">
        <div>
          <ul className="pagination pagination-boxed mb-0 justify-content-center">
            <li className="page-item">
              <button className="page-link" onClick={() => previousPage()} disabled={!canPreviousPage}>
                <TbChevronLeft />
              </button>
            </li>

            {Array.from({ length: pageCount }).map((_, index) => (
              <li key={index} className={`page-item ${pageIndex === index ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setPageIndex(index)}>
                  {index + 1}
                </button>
              </li>
            ))}

            <li className="page-item">
              <button className="page-link" onClick={() => nextPage()} disabled={!canNextPage}>
                <TbChevronRight />
              </button>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default TablePagination; 