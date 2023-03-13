import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
    let [keyword, setKeyword] = useState("");
    let dispatch = useDispatch();
    let { contact } = useSelector((state) => state);
    const searchByName = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
    };

  return (
    <Form onSubmit={searchByName} className="search-form">
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 입력하세요." onChange={(event) => setKeyword(event.target.value)} />
            </Col>
            <Col lg={2}>
                <Button>검색</Button>
            </Col>
        </Row>
    </Form>
    
  )
}

export default SearchBox;