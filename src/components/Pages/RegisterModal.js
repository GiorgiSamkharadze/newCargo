import { Button } from 'bootstrap';
import { AuthContext } from 'context';
import React, { useContext } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { Redirect } from 'react-router';
import RoutedModal from 'utils/RoutedModal';

const RegisterModal = (props) => {
  const {
    auth: { isLoggedIn, accountType },
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  if (isLoggedIn && accountType === 'CLIENT') {
    return <Redirect to={props.match.params[0]} />;
  } else {
    return (
      <RoutedModal
        header="Register"
        back={props.match.params[0]}
        className="w-90 w-md-70  w-lg-60"
      >
        <Container
          className="align-items-center d-flex"
          style={{ height: '100vh' }}
        >
          <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Enter Your Id</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Button type="submit" className="me-2 my-2">
              Login
            </Button>
            <Button variant="secondary">Create A New Id</Button>
          </Form>
        </Container>
      </RoutedModal>
    );
  }
};

export default RegisterModal;
