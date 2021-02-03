import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../Componentes/Contador/ItemCount.jsx';

const Productos = () => {
    const ofertas = () => {
        alert("Ofertas");
    }
return (
    <>   
    <h1>Nuestros productos</h1>
    <button OnClick={ofertas}>Ver Ofertas</button>  
    <div class="container">
            <div class="row">
                <div class="col-sm">
                    Producto 1
                </div>
                <div class="col-sm">
                    Producto 2
                </div>
                <div class="col-sm">
                    Producto 3
                </div>
        </div>
</div>
    <Counter/> 
    </>   
);
}

export default Productos; 