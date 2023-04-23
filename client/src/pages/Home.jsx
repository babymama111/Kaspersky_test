import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./pagesStyles/Home.css";
import { CSSTransition } from "react-transition-group";

// тут домашняя страничка без навбара с ссылками,
//  куда я накрутил кнопку с другим роутом, потом этот компонент я добаялю в лайот и получается страничка приветствия
const Home = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);
 

  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <img
            className={styles.image}
            src="https://content.kaspersky-labs.com/se/com/content/en-global/images/b2c/product-icon-kisa/product-icon-kisa.png"
            alt="your-alt-text"
          />

          <CSSTransition
            in={show}
            classNames={styles.fade}
            timeout={1000}
            unmountOnExit
          >
            <h1 className={styles.heading}>Привет, Kaspersky Team!</h1>
          </CSSTransition>
          <CSSTransition
            in={show}
            classNames={styles.fade}
            timeout={1000}
            unmountOnExit
          >
            <p className={styles.paragraph}>
              Сильно не ругайтесь на код, у меня лапки)))
            </p>
          </CSSTransition>

          <Link to="/list">
            <Button className={styles.button} variant="primary">
              Списки пользователей
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
