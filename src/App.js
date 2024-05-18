import { Provider } from 'react-redux';

import './App.css';
import { AppRouter } from './utils/AppRouter';
import { store } from './utils/redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
