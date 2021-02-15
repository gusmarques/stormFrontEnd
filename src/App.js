import './App.css';
import Nav from '../src/components/nav'
import Footer from '../src/components/footer'
import Table from '../src/components/tableUsers'

function App() {
  return (
    <>

      <div className="container">
        <Nav/>
        <div className="content">
          <Table/>
        </div>
      </div>
      <Footer/>

    </>
  );
}

export default App;
