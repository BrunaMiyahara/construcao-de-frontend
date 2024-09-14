import React /*biblioteca que permite criar componentes React*/, {useState /*hook que permite adicionar estado*/} from 'react'

const FocusBlurExample /*componente controlado*/= () => {
    const [isFocused/*varíavel de estado que armazena o valor atual*/, setIsFocused/*função que permite atualizar o valor da varíavel de estado*/] =
    useState/*hook para declarar o estado isFocused*/(false/*valor inicial*/);
    const [inputValue, setInputValue] = useState('');
    const [nome, setNome] = useState('inputValue');
  
    // Função que atualiza o estado quando o elemento recebe foco
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    // Função que atualiza o estado quando o elemento perde o foco
    const handleBlur = () => {
      setIsFocused(false);
    };
  
    // Função que atualiza o estado quando o valor de um campo de entrada for alterado
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 /*título*/>React onFocus and onBlur Example</h2>
        <h3 class="oi"  /*título com classe oi*/>Olá {nome}!</h3>
        <input
          type="text" /*define o tipo do campo de entrada como texto*/
          value={inputValue} /*o valor do input é controlado pelo estado*/
          onFocus={handleFocus} /*função handleFocus será chamada quando o campo de entrada ganhar foco*/
          onBlur={handleBlur} /*função handleBlur será chamada quando o campo de entrada perder o foco*/
          onChange={handleChange} /*handleChange é chamada quando muda o valor no campo de entrada*/
          placeholder="Click or tab to focus" /*texto exibido no campo quando ele está vazio*/
          style={{
            padding: '10px',
            fontSize: '16px',
            border: isFocused ? '2px solid green' : '1px solid gray',/*se isFocused é true então '2px solid green', senão '1px solid gray'*/
          }/*estilização*/}
        />
        <div style={{ marginTop: '20px' }}>
          {isFocused ? <p>The input is focused!</p> : <p>The input is not focused.</p> /*renderização condicional*/}
        </div>
        <p>Input value: {inputValue/*valor da variável inputValue*/}</p>
        <button onClick={ () => setNome(inputValue)}/*define a função que será chamada quando o botão for clicado*/>
          Cliqe para aparecer o valor do Input depois do Olá
        </button>
      </div>
    );
}

export default FocusBlurExample /*exportando o componente*/