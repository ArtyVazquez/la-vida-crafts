
import { Form, Row, Col, Button } from 'react-bootstrap'
import styles from '/styles/ContactForm.module.css'
function ContactForm() {
  return (

    // <div className={styles.form}>
    <div className={styles.form}>

    
        <Form action="https://formsubmit.co/avazquez1699@gmail.com" method="POST" className="text-center p-5">
            <Form.Group className="mb-3" controlId="forname">
                <Form.Control name="name" placeholder="Name: " required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="foremail">
                <Form.Control type="email" name="email" placeholder='Email:'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formessage">
                <Form.Control type="message" name="message" as='textarea' placeholder="Message" rows={9} />
            </Form.Group>

            <Button variant="secondary" type="submit">
                Send
            </Button> 
        </Form>
    
    </div>
    
  )
}

export default ContactForm