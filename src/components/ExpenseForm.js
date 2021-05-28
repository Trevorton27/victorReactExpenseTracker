import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function ExpenseForm () {
  return (
    <Container>
      <Form id='expense-form'>
        <Form.Row>
          <Form.Group>
            <Col>
              <Form.Label htmlFor='date'>Date:</Form.Label>
              <Form.Control id='date' type='date' required />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Label htmlFor='amount'>Amount:</Form.Label>
              <Form.Control id='amount' type='number' required />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Label htmlFor='item'>Item:</Form.Label>
              <Form.Control id='item' type='text' required />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Label htmlFor='comment'>Comment (Optional):</Form.Label>
              <Form.Control id='comment' type='text' />
            </Col>
          </Form.Group>

          <Col>
            <Button type='submit' variant='primary' disabled>Add Expense</Button>
          </Col>
        </Form.Row>
      </Form>

    </Container>
  )
}

export default ExpenseForm;