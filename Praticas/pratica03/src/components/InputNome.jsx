import "./Input.css";

function InputNome(){

    return(
        <>
        <label htmlFor = "Nome"> Nome </label>
        <input type = "text" id = "Nome" name = "Nome" required></input>
        </>
    );
}

export default InputNome;