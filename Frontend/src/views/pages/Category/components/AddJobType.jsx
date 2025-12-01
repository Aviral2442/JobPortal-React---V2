import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Container, Spinner } from "react-bootstrap";
import axios from "@/api/axios";
import ComponentCard from "@/components/ComponentCard";

const AddJobType = ({ mode = "add", data = null, onCancel = () => {}, onDataChanged = () => {} }) => {
  const isEditMode = mode === "edit" && data;
  const [name, setName] = useState("");
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  const [loading, setLoading] = useState(false);

  const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    if (isEditMode) {
      // support different incoming shapes
      setName(data?.jobType_name || data?.job_type_name || data?.name || "");
      setStatus(Number(data?.jobType_status ?? data?.job_type_status ?? 0));
    } else {
      setName("");
      setStatus(0);
    }
  }, [isEditMode, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setMessage("Job type name is required");
      setVariant("danger");
      return;
    }

    setLoading(true);
    try {
      if (isEditMode) {
        // Attempt update; backend route may vary — adjust if your API uses different path
        await axios.put(`${baseURL}/job-types/update_job_type/${data._id}`, {
          jobType_name: name.trim(),
          jobType_status: status,
        });
        setMessage("Job type updated successfully");
      } else {
        const res = await axios.post(`${baseURL}/job-types/create_job_type`, {
          jobType_name: name.trim(),
          jobType_status: status,
        });
        // backend may return jsonData or jobType
        console.log("create_job_type response:", res.data);
        setMessage("Job type added successfully");
      }
      setVariant("success");
      onDataChanged();
      setTimeout(() => onCancel(), 800);
    } catch (err) {
      console.error("Add/Update JobType error:", err.response?.data || err.message);
      setMessage(err.response?.data?.message || "Failed to save job type");
      setVariant("danger");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="pt-4">
      <ComponentCard title={isEditMode ? "Edit Job Type" : "Add Job Type"}>
        {message && <Alert variant={variant} dismissible onClose={() => setMessage("")}>{message}</Alert>}
        <Form onSubmit={handleSubmit} className="py-2">
          <Form.Group className="mb-3" controlId="jobTypeName">
            <Form.Label>Job Type Name <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter job type name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="jobTypeStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select value={String(status)} onChange={(e) => setStatus(Number(e.target.value))}>
              <option value="0">Active</option>
              <option value="1">Inactive</option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex gap-2">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? <><Spinner animation="border" size="sm" /> {isEditMode ? "Updating..." : "Adding..."}</> : (isEditMode ? "Update Job Type" : "Add Job Type")}
            </Button>
            <Button variant="secondary" type="button" onClick={onCancel} disabled={loading}>Cancel</Button>
          </div>
        </Form>
      </ComponentCard>
    </Container>
  );
};

export default AddJobType;
