import Heading from './heading';
import Footer from './footer';
import Props from './props';
import Foods from './foods'
import Form from './form'
import './App.css';
import MyComponent from './usestate-learning';
import Counter from './counter'

function App() {
  return (<>
    <Heading />
    <br />
    <hr />
    <br />
    <Foods />
    <br />
    <hr />
    <br />
    <Props name="Afsar" isLoggedIn={true} />
    <br />
    <hr />
    <br />
    <Counter />
    <br />
    <hr />
    <br />
    <MyComponent />
    <br />
    <hr />
    <br />
    <Form />
    <br />
    <hr />
    <br />
    <Footer />
  </>
  );
}

export default App