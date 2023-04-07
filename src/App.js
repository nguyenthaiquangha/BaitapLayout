import logo from './logo.svg';
import './App.css';
import { Header } from './module/layout/Header';
import { Banner } from './module/layout/Baner';
import { PageContent } from './module/layout/PageContent';
import { Footer } from './module/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
