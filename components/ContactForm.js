
import {Form,Row,Col } from 'react-bootstrap'
import styles from '../styles/ContactForm.module.css'
function ContactForm() {
  return (
      <div className={styles.form}>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formfirstname">
                    <Form.Control type="name" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formlastname">
                    <Form.Control type="name" placeholder="Enter last name" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control type="email" placeholder='Email'/>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                
                <Form.Control type='phone' placeholder='phone number' />
            </Form.Group>
            </Row>
            <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows={9} />
            </Form.Group>
            
        </Form>
      </div>
    
  )
}

export default ContactForm