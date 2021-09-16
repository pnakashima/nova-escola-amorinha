
const StudentForm = () => {

    return (

        <form>
            <div className="student-form">

                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="dob">Data de nascimento:</label>
                <input type="date" id="dob" name="dob" />

                <label htmlFor="responsible">Responsável:</label>
                <input type="text" id="responsible" name="responsible" />

                <label htmlFor="responsiblePhone">Telefone do responsável:</label>
                <input type="text" id="responsiblePhone" name="responsiblePhone" />

                <label htmlFor="emergency">Contato de emergência:</label>
                <select name="emergency" value="">
                    <option value="none"></option>
                    <option value="pais">Pais</option>
                    <option value="tios">Tios</option>
                    <option value="avós">Avós</option>
                    <option value="padrinhos">Padrinhos</option>
                </select>

                <label htmlFor="emergencyPhone">Telefone para emergências:</label>
                <input type="text" id="emergencyPhone" name="emergencyPhone" />

                <div>
                <input type="checkbox" id="foodRestriction" name="foodRestriction" checked />
                <label for="foodRestriction">Possui restrição alimentar</label>
                </div>

                <label htmlFor="restrictionDescription">Descrição das restrições alimentares:</label>
                <input type="text" id="restrictionDescription" name="restrictionDescription" />

                <div>
                <input type="checkbox" id="photoAuth" name="photoAuth" checked />
                <label for="photoAuth">Autorização de fotos e vídeos da criança</label>
                </div>

                <label htmlFor="authorizedPeople">Lista de autorizados para buscar a criança:</label>
                <input type="text" id="authorizedPeople" name="authorizedPeople" />

                <label htmlFor="classNumber">Turma:</label>
                <select name="classNumber" value="">
                    <option value="none"></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <label htmlFor="additionalObs">Observações adicionais:</label>
                <input type="text" id="additionalObs" name="additionalObs" />

                <button type="submit">Cadastrar</button>
            </div>
        </form>
    )
}

export default StudentForm