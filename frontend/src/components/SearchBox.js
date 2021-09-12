import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <div>
      <Form onSubmit={submitHandler} inline style={{ display: "flex" }}>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
          style={{ width: 300, marginRight: 30 }}
        ></Form.Control>
        <Button
          type="submit"
          variant="outline-success"
          className="p-2"
          style={{ borderWidth: 6 }}
        >
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;
