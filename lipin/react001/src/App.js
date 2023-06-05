import Texto from './componentes/texto';
import Paragrafo from './componentes/paragrafo'; 
import Post from './componentes/post';
import ComponenteUm from './componentes/ComponenteUm';
import ComponenteDois from './componentes/ComponenteDois';

function App() {
    return (
        <div>
            <Post comentario="Comentario 1" autor="Cesar"/>
            <Post comentario="Comentario 2" autor="Cesar"/>
            <Post comentario="Comentario 3" autor="Cesar"/>
            <ComponenteUm />
            <ComponenteDois />
            <ComponenteTres />
            <ComponenteQuatro texto="l7 me espera"/>
        </div>
    )
}
export default App