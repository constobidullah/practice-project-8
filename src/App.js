
import './App.css';
import Header from './component/header/Header';
import Cart from './component/cart/Cart';
import QuestionAnswer from './component/QuestionAnswer/QuestionAnswer';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Cart></Cart>
      <QuestionAnswer></QuestionAnswer>
      <Footer></Footer>
    </div>
  );
}

export default App;
