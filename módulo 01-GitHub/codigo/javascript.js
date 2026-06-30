import { useState } from 'react';

export function Contador() {
  // Define o estado inicial do contador como zero
  const [contagem, setContagem] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Contador de Cliques: {contagem}</h2>
      
      {/* Botão que incrementa o estado ao ser clicado */}
      <button onClick={() => setContagem(contagem + 1)}>
        Incrementar
      </button>
    </div>
  );
}
