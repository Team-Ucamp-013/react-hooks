import React, { useReducer } from "react";

const estadoInicial = {count:0}

function Reducir(state, action){
    switch(action.type){
        case 'incrementar':
            return {count: state.count + 1};
        case 'decrementar':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function Reduc(){
    const [state, setState] = useReducer(Reducir, estadoInicial)
    return(
        <>
        Contador: {state.count}
        <button onClick={() => setState({type: 'incrementar'})}>+</button>
        <button onClick={() => setState({type: 'decrementar'})}>-</button>
        <div>
        <img src={'https://imgs.search.brave.com/Nopk1Afq1lMr4-fTCORalA2PcPIT4CeAyIoatAbP0B8/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9jYXNh/cmljYS5jZG4xLmRh/dHRhbWF4LmNvbS91/c2VyZmlsZXMvaW1h/Z2VzL3Byb2R1Y3Rv/cy82MDAvMTA0MTAu/anBn'} />
        </div>
        
        </>
    )
}

export default Reduc