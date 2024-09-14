import React, {useState} from 'react'

const Slide6 = () => {

    //Exemplo de useState
    const [nome /*estado*/ , setNome /*função para atualizar o estado*/ ] = useState /*hook*/ ('Valor inicial' /*valor inicial do estado*/ );

    //Exemplo de Manipulação de Evento
    function handleClick() {
        setNome('Manipulador de evento handleClick')/*função para atualizar o estado*/;
        console.log("Clicou - Manipulação de Evento");
    };

    //Exemplo de Manipulador de Eventos
    function handleClick1(event/*evento sintético*/) {
        setNome('evento={manipulador de evento}');
        console.log("Clicou! - Manipulador de Evento");
    };

    //Exemplo de Parâmetros em ME
    function handleClick2(texto/*parâmetro adicional*/, event) {
        setNome(texto);
        console.log("Clicou! - Parâmetros em ME");
    };

    //Exemplo de onClick
    function handleClick3(event) {
        console.log(`Você pressionou um ${event.target.tagName}! - onClick`);
    };

    //Exemplo de onChange
    function handleChange(event) {
        console.log(`Você mudou para ${event.target.value}! - onChange`);
    };

    //Exemplo de onKeyDown
    function handleKeyDown(event) {
        console.log(`Você acionou a tecla ${event.key} - onKeyDown`);
    }

    //Exemplo de onFocus e onBlur
    function handleFocus(event) {
        console.log(`${event.target.id} ganhou o foco enquanto que ${event.relatedTarget.id} perdeu o foco - onFocus`);
    }
    function handleBlur(event) {
        console.log(`${event.target.id} perdeu o foco enquanto que ${event.relatedTarget.id} ganhou o foco - onBlur`);
    }

    //Exemplo de onSubmit
    function handleSubmit(event) {
        console.log(`Um nome foi enviado: ${event.target[0].value} - onSubmit`);
        event.preventDefault(); //evita o submit do navegador
    }

    return (
        <>  
            <nav>
                <ul>
                    <li><a href="#exemploDeUseState">Exemplo de useState</a></li>
                    <li><a href="#exemploDeManipulaçãoDeEvento">Exemplo de Manipulação de Evento</a></li>
                    <li><a href="#exemploDeManipuladorDeEventos">Exemplo de Manipulador de Eventos</a></li>
                    <li><a href="#exemploDePrâmetrosEmME">Exemplo de Parâmetros em ME</a></li>
                    <li><a href="#exemploDeOnClick">Exemplo de onClick</a></li>
                    <li><a href="#exemploDeOnChange">Exemplo de onChange</a></li>
                    <li><a href="#exemploDeOnKeyDown">Exemplo de onKeyDown</a></li>
                    <li><a href="#exemploDeOnFocusEOnBlur">Exemplo de onFocus e onBlur</a></li>
                    <li><a href="#exemploDeOnSubmit">Exemplo de onSubmit</a></li>
                </ul>
            </nav>

            <h2>{nome/*valor atual*/}</h2>

            <div id="exemploDeUseState">
                <h3>Exemplo de useState</h3>
                <button onClick={() => setNome /*altera o valor do estado para Exemplo de useState*/ ('hook useState')}>
                    Atualizar o estado
                </button>
            </div>

            <div id="exemploDeManipulaçãoDeEvento">
                <h3>Exemplo de Manipulação de Evento</h3>
                {/*HTML*/}
                <button onclick="handleClick()">
                    {/*onclick - evento, "handleClick()"" - manipulador de evento*/}
                    onClick-HTML (não funiona em arquivo JSX)
                </button>
                {/*React*/}
                <button onClick={handleClick}>
                    {/*onClick - evento,{handleClick} - manipulador de evento*/}
                    onClick-React
                </button>
            </div>

            <div id="exemploDeManipuladorDeEventos">
                <h3>Exemplo de Manipulador de Eventos</h3>
                <button onClick={handleClick1}>onClick, handleClick</button>
            </div>

            <div id="exemploDePrâmetrosEmME">
                <h3>Exemplo de Parâmetros em ME</h3>
                <button onClick={(event) => 
                    handleClick2('handleClick chamado explicitamente com um argumento', event)/*chamada explícita ao manipulador de eventos*/}>
                    Chamar um Manipulador Explicitamente
                </button>
            </div>

            <div id="exemploDeOnClick">
                <h3>Exemplo de onClick</h3>
                <div onClick={handleClick3}><p>Clique-me - div</p></div>
                <button onClick={handleClick3}>Clicar - button</button>
            </div>

            <div id="exemploDeOnChange">
                <h3>Exemplo de onChange</h3>
                <input onChange={handleChange}/>
                <textarea onChange={handleChange}/>
                <select onChange={handleChange}>
                    <option value="">Selecione uma opção</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>

            <div id="exemploDeOnKeyDown">
                <h3>Exemplo de onKeyDown</h3>
                <input onKeyDown={handleKeyDown} />
            </div>

            <div id="exemploDeOnFocusEOnBlur">
                <h3>Exemplo de onFocus e onBlur</h3>
                <input id="id1" onFocus={handleFocus} onBlur={handleBlur} placeholder="id1"/>
                <input id="id2" onFocus={handleFocus} onBlur={handleBlur} placeholder="id2"/>
            </div>

            <div id="exemploDeOnSubmit">
                <h3>Exemplo de onSubmit</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text">
                        Nome: <input type="text" id="text" />
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
            </div>

        </> 
    )
}

export default Slide6