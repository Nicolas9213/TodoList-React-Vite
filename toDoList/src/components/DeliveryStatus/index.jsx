import { useState } from "react";

function DeliveryStatus () {
    
    const [status, setStatus] = useState("Pendente");

    const atualizar = () => {
        setStatus();
    }

    return (
        <div>
            <h1>Situação do Pedido: {status}</h1>
            <button>Pendente</button>
            <button>Em trânsito</button>
            <button>Entregue</button>
        </div>
    )
}

export default DeliveryStatus;