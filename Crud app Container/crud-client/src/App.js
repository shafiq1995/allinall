import './App.css';
import PostMessages from './components/postMessage';
import PostMessagesForm from './components/postMessageForm';
import { Provider, provider } from 'react-redux';
import { store } from "./actions/store"

function App() {
  return (
    <Provider store={store}>
      <postMessage/>
    </Provider>
  );
}

export default App;
