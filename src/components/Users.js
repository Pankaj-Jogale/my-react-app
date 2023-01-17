import Table from "react-bootstrap/Table";
import axios from "axios";
import React, { useState } from "react";

function Users() {
  let [list, setList] = useState([{}]);

  let getData = async () => {
    let url2 = `http://localhost:3001/login`;
    let response = await axios.get(url2);
    list = [...response.data];
    setList(list);
  };

  return (
    <div className="m-2">
      <h1>List of Students</h1>
      <br />

      <div className="row mb-4 ms-2 d-flex align-items-center">
        <select
          className="col-1 form-select m-2 w-25 h-25"
          aria-label="Default select example"
        >
          <option selected>Select Class from Dropdown</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="3">Three</option>
          <option value="3">Three</option>
          <option value="3">Three</option>
        </select>
        <input
          onClick={() => getData()}
          className="col-1 btn btn-small btn-primary ms-2"
          type="button"
          value="Get data"
        />

        <input
          className="col-1 form-control w-25 h-30 ms-4"
          type="search"
          name=""
          id=""
          placeholder="Start typing to search"
        />
        <input
          className="col-1 btn btn-small btn-primary ms-2"
          type="button"
          value="Search"
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
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

export default Users;
