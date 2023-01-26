import React, { useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

function Video() {
  let [list, setList] = useState([{}]);
  let videoData = async () => {
    let url2 = `http://localhost:3001/login`;
    let response = await axios.get(url2);
    list = [...response.data];
    setList(list);
  };
  Window.onload = videoData();

  return (
    <div>
      <h1>VideoLinks</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Links</th>
            <th>Modifications(click if want to modify)</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr>
              <td>{item.uname}</td>
              <td>{item.email}</td>
              <td>{item.upass}</td>
              <td>
                <a
                  className="ms-5"
                  href="https://drive.google.com/file/d/1NO_Wvc38-8GtkUsALWrHbTJm2ErJCmPo/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                >
                  <i class="fa-sharp fa-solid fa-circle-play"></i>
                </a>
              </td>
              <td>
                <a className="me-3" href="update">
                  Update
                </a>
                <a className="me-3" href="delete">
                  Delete
                </a>
                <a href="block">Block</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Video;
