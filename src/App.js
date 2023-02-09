import UserContext from './context/UserContext'
import { BasicModal } from './components/btnimagen';
import { Imagenes } from './components/imagen';

function App() {
  const userData = {
    icons: null,
    inputValues: 'open',
  }
  return (
    <div>
    <UserContext.Provider value={userData}>
      <Imagenes></Imagenes>
      <BasicModal></BasicModal>
    </UserContext.Provider>

    </div>
  );
}

export default App;
