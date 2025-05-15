import "./Conteudo.css";

function Conteudo(props){

    return(
        <main> <main className={props.estilo}>
            {props.children}</main></main>
    );
}

export default Conteudo;