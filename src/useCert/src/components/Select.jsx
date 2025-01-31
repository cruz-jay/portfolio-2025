import { Container, Row, Col, Form } from "react-bootstrap";

const exams = [
  {
    examName: "CompTIA A+",
    roomNumber: "Room 203",
    proctoredBy: "Prof. Kevin Mess",
  },
  {
    examName: "AWS Cloud Cert",
    roomNumber: "Room 105",
    proctoredBy: "Prof. Karen Coombs",
  },
  {
    examName: "Google Cert",
    roomNumber: "Room 210",
    proctoredBy: "Prof. Naser Heravi",
  },
];

// Campus options
const campuses = ["North Las Vegas", "Henderson", "Charleston"];

function Selects() {
  return (
    <Container>
      <h3 className="my-4 text-center">Select Exam</h3>
      {exams.map((exam, index) => (
        <Row key={index} className="mb-4">
          <Col md={3}>
            <h5>{exam.examName}</h5>
          </Col>
          <Col md={3}>
            <p>
              <strong>Room Number:</strong> {exam.roomNumber}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <strong>Proctored By:</strong> {exam.proctoredBy}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <strong>Date:</strong> {exam.date}
            </p>
          </Col>
          <Col md={12} className="mt-2">
            <Form.Group controlId={`selectCampus${index}`}>
              <Form.Label>Select Campus</Form.Label>
              <Form.Select aria-label="Select Campus">
                <option value="">Choose Campus</option>
                {campuses.map((campus, idx) => (
                  <option key={idx} value={campus}>
                    {campus}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Selects;
