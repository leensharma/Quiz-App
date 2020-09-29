import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const Testlist = (props) => {
  const [lists, setLists] = useState([]);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    axios.get("/api/quiz/testList").then((res) => {
      const data = res.data.subject;
      console.log(data);
      setLists(data);
    });
  }, []);
  console.log(lists);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/quiz/subjectTest/${subject}`).then((res) => {
      console.log(res);
      props.history.push({
        pathname: "/quiz",
        data: res,
      });
    });
  };
  const onChange = (e) => {
    setSubject(e.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: "#ced4da",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          height: "70vh",
          width: "60vw",
          padding: "100px 80px 100px 150px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Custom select</Form.Label>

            <Form.Control
              as="select"
              onChange={onChange}
              name="subject"
              value={subject}
              custom
            >
              {lists.map((list, index) => {
                return (
                  <React.Fragment key={index}>
                    <option>{lists[index]}</option>
                  </React.Fragment>
                );
              })}
            </Form.Control>
            <div>
              <button className="btn btn-dark mt-3" type="submit">
                Start Quiz
              </button>
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
export default Testlist;
