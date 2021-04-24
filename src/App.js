import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App() {
    return (
        <div>
            <div style={{ float: 'left', width: '50%' }}>
                <Shop />
            </div>
            <div style={{ float: 'right', width: '40%' }}>
                <Cart />
            </div>
        </div>
    );
}

export default App;
