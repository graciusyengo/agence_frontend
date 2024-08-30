
import './App.css';
import Layout from './components/Layout/Layout';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservation from './components/Reservation';

function App() {
  return (
    <div className="App">
    
        <Layout>
          <Main/>
          <Reservation/>
        </Layout>
     
    </div>
  );
}

export default App;
