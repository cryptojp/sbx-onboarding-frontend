import {Container, Row, Col, Navbar, Image} from 'react-bootstrap';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const backgroundImg = "https://cdn.dribbble.com/users/1633085/screenshots/6697520/shot_4x.jpg";

function Login(){
  return (
    <div style={{ backgroundColor: 'white', padding: '40px', marginTop: '70px', border: '1px solid #e8e8e8', boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)' }}>
      <Image width={495} src="https://chagency.co.uk/blog/wp-content/uploads/2018/12/coloured-logo-review-saas-company-1024x421.jpg" rounded />
      <p className="text-center mb-5">Log in to your account</p>
      <Form style={{ marginBottom: '20px' }}>
        <Form.Group controlId="formBasicEmail" style={{ borderRadius: '0px' }}>
          <Form.Control type="email" placeholder="Enter email" style={{ fontSize: 14, borderRadius: '0px' }} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" style={{ marginBottom: '30px' }}>
          <Form.Control type="password" placeholder="Password" style={{ fontSize: 14, borderRadius: '0px' }} />
        </Form.Group>
        <Button
          variant="success"
          type="button"
          block={true}
          onClick={() => console.log("haha")}
          style={{ borderRadius: '5px', padding: '10px', fontSize: '15px'}}
        >
          <Link href="/">
            <a style={{color: 'white !important'}}>Log In</a>
          </Link>
        </Button>
      </Form>
      <div className='text-center'><a className='text-muted' href="/sign-up">Forgot your password?</a></div>
    </div>
  )
}

function Page() {
  return (
    <div
      style={{  
        backgroundColor: '#edf2f9' 
      }}
    >
    <Container style={{ height: '100vh' }}>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} sm={{ size: 6, offset: 3 }} style={{ marginTop: 50 }}>
          <Login/>
        </Col>
      </Row>
    </Container>
    </div>

  )
}

export default Page;