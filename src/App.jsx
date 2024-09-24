import "./App.css";
import Idiomas from "./Idiomas";
import Pagina from "./Pagina";
import {Provider} from '../contexto/Provider';

const App = () => {
  return (
    <Provider>
    <div className="Menu">
        <Idiomas/>
        <Pagina />
    </div>
    </Provider>
  );
};

export default App;
