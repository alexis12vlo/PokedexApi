

function Portada({ visible, setVisible }) {
    function Activar() {
        visible[0].block = 'none';
        visible[0].none = 'block';
        setVisible([...visible]);
    }
    return (
        <div className="Portada2">
            <div className="PortadaImage">

            </div>
            <div className="PortadaPokemones">

            </div>
            <div className="PortadaBoton">
                <button onClick={Activar} className="PortadaButton">
                    Empezar
                </button>
            </div>
        </div>
    )
}
export default Portada