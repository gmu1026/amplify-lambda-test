import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import Detail from "./Detail";

function List({ match }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(
        "https://u120p3poi0.execute-api.ap-northeast-2.amazonaws.com/dev/test",
        token
      )
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>address</th>
            <th>detail_address</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              {/* <LinkContainer to={`${match.url}/${item.no}`}> */}
              <Route
                exact
                path={`${match.path}/:no`}
                component={Detail}
              ></Route>
              <td>
                <Link to={`${match.url}/${item.no}`}>{item.no}</Link>
              </td>
              {/* </LinkContainer> */}
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.detail_address}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </Table>
    </div>
  );
}

export default List;
