import {Container, Row, Col, Navbar, Image} from 'react-bootstrap';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const backgroundImg = "https://cdn.dribbble.com/users/1633085/screenshots/6697520/shot_4x.jpg";

function Login(){
  return (
    <div>
      <Image width={500} src="https://chagency.co.uk/blog/wp-content/uploads/2018/12/coloured-logo-review-saas-company-1024x421.jpg" rounded />
      <Form style={{ marginBottom: '20px' }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{ marginBottom: '30px' }}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="danger"
          type="button"
          block={true}
          onClick={() => console.log("haha")}
          style={{ borderRadius: '20px', padding: '10px', fontSize: '16px'}}
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
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
    <Container style={{ height: '100vh', backgroundColor: 'white'}}>
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