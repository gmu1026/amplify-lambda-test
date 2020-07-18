import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

function Detail({ match, history }) {
  const { branch, setBranch } = useState([]);

  useEffect(() => {
    console.log(match.path);
    console.log(match.url);
    const no = match.params.no;
    console.log(match.params.no);
    axios
      .get(
        `https://u120p3poi0.execute-api.ap-northeast-2.amazonaws.com/dev/test/${no}`
      )
      .then((response) => {
        setBranch(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  });
  return (
    <div>
      테스트
      <Form>
        <Form.Control type="text" value={branch.name}></Form.Control>
      </Form>
    </div>
  );
}

export default Detail;
