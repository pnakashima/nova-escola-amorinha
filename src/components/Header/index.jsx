import { useHistory } from "react-router"

const Header = () => {

    const history = useHistory()

    return (
        <div className="header-container">
            <div>
                <h1 className="title">Escola Amorinha</h1>
            </div>
            <div>
                <span onClick={() => history.push("/")}>Diretório de Alunos</span>
                <span onClick={() => history.push("/register")}>Cadastro de Alunos</span>
            </div>
        </div>)

}

export default Header