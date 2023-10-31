import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CommentForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    rating: null,
    author: null,
    comment: null,
  });
  const [globalError, setGlobalError] = useState(null);
  const [authorError, setAuthorError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    if (!formData.rating || !formData.author || !formData.comment) {
      setGlobalError("Input cannot be empty");
      return;
    }

    if (formData.author.length <= 2) {
      setAuthorError("Must be greater than 2 characters");
      return;
    }
    if (formData.author.length > 15) {
      setAuthorError("Must be 15 characters or less");
      return;
    }
    handleClose();
    setFormData({
      rating: null,
      author: null,
      comment: null,
    });
    setGlobalError(null);
    setAuthorError(null);
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Submit comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {globalError && (
            <Form.Text style={{ color: "red", marginBottom: "10px" }}>
              {globalError}
            </Form.Text>
          )}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                onChange={(e) =>
                  setFormData((prevData) => {
                    if (prevData) {
                      return {
                        ...prevData,
                        rating: Number.parseInt(e.target.value),
                      };
                    } else {
                      return { rating: Number.parseInt(e.target.value) };
                    }
                  })
                }
                aria-label="Default select example"
              >
                <option>Select your rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="authorname">Your name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData((prevData) => {
                    if (prevData) {
                      return {
                        ...prevData,
                        author: e.target.value,
                      };
                    } else {
                      return { author: e.target.value };
                    }
                  })
                }
                type="text"
                id="authorname"
                aria-describedby="passwordHelpBlock"
              />
              {authorError && (
                <Form.Text style={{ color: "red" }}>{authorError}</Form.Text>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={(e) =>
                  setFormData((prevData) => {
                    if (prevData) {
                      return {
                        ...prevData,
                        comment: e.target.value,
                      };
                    } else {
                      return { comment: e.target.value };
                    }
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommentForm;
