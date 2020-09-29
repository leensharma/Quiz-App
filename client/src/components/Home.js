import React, { useState } from "react";
import { Form, InputGroup, Col } from "react-bootstrap";
import axios from "axios";

const Home = (props) => {
  const [value, setValue] = useState({
    subject: "",
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
  });

  const variable = {
    subject: value.subject,
    question: value.question,
    optionOne: value.optionOne,
    optionTwo: value.optionTwo,
    optionThree: value.optionThree,
    optionFour: value.optionFour,
    answer: value.answer,
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/quiz/addToQuiz", variable).then((response) => {
      console.log(response);
      setValue(response.config.data);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ced4da",
      }}
    >
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  Subject
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Please Enter the Subject"
                name="subject"
                value={value.subject}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="20">
            <Form.Label>Question</Form.Label>
            <Form.Control
              name="question"
              value={value.question}
              onChange={handleChange}
              as="textarea"
            />
          </Form.Group>
          <Form.Row>
            <Form.Group>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">A</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Option A"
                  name="optionOne"
                  value={value.optionOne}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="ml-3">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">B</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Option B"
                  name="optionTwo"
                  value={value.optionTwo}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">C</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Option C"
                  name="optionThree"
                  value={value.optionThree}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="ml-3">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">D</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Option D"
                  name="optionFour"
                  value={value.optionFour}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">Answer</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Answer"
                name="answer"
                value={value.answer}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <button className="btn btn-dark mt-3" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Home;
