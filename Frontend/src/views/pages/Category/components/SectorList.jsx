import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Dropdown, Alert, Spinner } from 'react-bootstrap';
import { createRoot } from 'react-dom/client';
import { TbDotsVertical, TbEdit, TbTrash } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TableList from "@/components/table/TableList";
import DT from 'datatables.net-bs5';

const SubCategoryList = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');
  const navigate = useNavigate();
  const tableRef = useRef(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // Fetch sub-categories
  const fetchSubCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/subcategories`);
      const data = Array.isArray(res.data) ? res.data : res.data.data || [];
      setSubCategories(data);
    } catch (err) {
      console.error(err);
      setSubCategories([]);
      setMessage('Failed to fetch sub-categories.');
      setVariant('danger');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  // Delete sub-category
  const handleDelete = async (id) => {
    if (!id) return;
    if (!window.confirm('Are you sure you want to delete this sub-category?')) return;

    try {
      await axios.delete(`${BASE_URL}/api/subcategories/${id}`);
      setMessage('Sub-category deleted successfully.');
      setVariant('success');
      fetchSubCategories();
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Failed to delete sub-category.');
      setVariant('danger');
    }
  };

  // DataTable columns
  const columns = [
    { title: 'Sub-Category Name', data: 'subCategoryName' },
    {
      title: 'Parent Category',
      data: 'parentCategory',
      createdCell: (td, cellData) => {
        td.innerHTML = cellData?.categoryName || '';
      },
    },
    {
      title: 'Image',
      data: 'subCategoryImage',
      orderable: false,
      createdCell: (td, cellData) => {
        td.innerHTML = cellData ? `<img src="${VITE_BASE_URL}${cellData}" alt="img" width="50"/>` : '';
      },
    },
    {
      title: 'Actions',
      data: null,
      orderable: false,
      createdCell: (td, cellData, rowData) => {
        td.innerHTML = '';
        const root = createRoot(td);
        root.render(
          <Dropdown align="end" className="text-muted">
            <Dropdown.Toggle variant="link" className="drop-arrow-none p-0">
              <TbDotsVertical />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => navigate(`/admin/sub-category/edit/${rowData._id}`, { state: rowData })}
              >
                <TbEdit className="me-1" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger" onClick={() => handleDelete(rowData._id)}>
                <TbTrash className="me-1" /> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      },
    },
  ];

  // Link DataTables plugin
  TableList.use = DT;

  return (
    <Container fluid className="pt-4">
      {message && <Alert variant={variant}>{message}</Alert>}

      {loading ? (
        <div className="text-center py-4">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          <Col>
            <TableList
              ref={tableRef}
              data={subCategories}
              columns={columns}
              options={{
                responsive: true,
                pageLength: 10,
                dom:  "<'d-md-flex justify-content-between align-items-center my-2'<'dt-buttons'B>f>" +
                  "rt" +
                  "<'d-md-flex justify-content-between align-items-center mt-2'ip>",
                buttons: [
                  { extend: "copyHtml5", className: "btn btn-sm btn-secondary" },
                  { extend: "csvHtml5", className: "btn btn-sm btn-secondary" },
                  { extend: "excelHtml5", className: "btn btn-sm btn-secondary" },
                  { extend: "pdfHtml5", className: "btn btn-sm btn-secondary" },
                ],
              }}
              className="table table-striped dt-responsive w-100"
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default SubCategoryList;
