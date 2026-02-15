import Heading from './heading';
import Footer from './footer';
import Props from './props';
import Foods from './foods'
import './App.css';
import MyComponent from './usestate-learning';
import Counter from './counter'

function App() {
  return (<>
    <Heading />
    <Props name="Afsar" isLoggedIn={true} />
    <br />
    <hr />
    <br />
    <Counter />
    <br />
    <hr />
    <br />
    <Foods />
    <br />
    <hr />
    <br />
    <MyComponent />
    <br />
    <hr />
    <br />
    <Footer />
  </>
  );
}

export default App