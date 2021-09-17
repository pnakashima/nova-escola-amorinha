import { useState } from "react"


const StudentForm = ({submitFunc}) => {

    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [responsible, setResponsible] = useState("")
    const [responsiblePhone, setResponsiblePhone] = useState("")
    const [emergency, setEmergency] = useState("")
    const [emergencyPhone, setEmergencyPhone] = useState("")
    const [foodRestriction, setFoodRestriction] = useState("")
    const [restrictionDescription, setRestrictionDescription] = useState("")
    const [photoAuth, setPhotoAuth] = useState("")
    const [authorizedPeople, setAuthorizedPeople] = useState("")
    const [classNumber, setClassNumber] = useState("")
    const [additionalObs, setAdditionalObs] = useState("")


    const phoneMask = (event) => {
        let text = event.target.value
        let numbers = text.replace(/\D/g, '')
        let mask = [...numbers].map((letter, i) => {
            if (i === 0) return ['(', letter]
            if (i === 2) return [')', letter]
            if (i === 7) return ['-', letter]
            if (i > 10) return ['']
            return letter
        }).flat(1).join('')
        const inputValue = mask
        event.target.value = mask
        return inputValue
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const student = {
            name,
            dob,
            responsible,
            responsiblePhone,
            emergency,
            emergencyPhone,
            foodRestriction,
            restrictionDescription,
            photoAuth,
            authorizedPeople,
            classNumber,
            additionalObs
        }
        console.log(student)

        submitFunc(student)
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="student-form">

                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="dob">Data de nascimento:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    onChange={(e) => setDob(e.target.value)}
                />

                <label htmlFor="responsible">Responsável:</label>
                <input
                    type="text"
                    id="responsible"
                    name="responsible"
                    onChange={(e) => setResponsible(e.target.value)}
                />

                <label htmlFor="responsiblePhone">Telefone do responsável:</label>
                <input
                    type="text"
                    id="responsiblePhone"
                    name="responsiblePhone"
                    onChange={(e) => setResponsiblePhone(phoneMask(e))}
                />

                <label htmlFor="emergency">Contato de emergência:</label>
                <select
                    name="emergency"
                    value={emergency}
                    onChange={(e) => setEmergency(e.target.value)}
                >
                    <option value="none"></option>
                    <option value="Pais">Pais</option>
                    <option value="Tios">Tios</option>
                    <option value="Avós">Avós</option>
                    <option value="Padrinhos">Padrinhos</option>
                </select>

                <label htmlFor="emergencyPhone">Telefone para emergências:</label>
                <input
                    type="text"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    onChange={(e) => setEmergencyPhone(phoneMask(e))}
                />

                <div>
                    <input
                        type="checkbox"
                        id="foodRestriction"
                        name="foodRestriction"
                        onChange={(e) => setFoodRestriction(e.target.value)}
                    />
                    <label htmlFor="foodRestriction">Possui restrição alimentar</label>
                </div>

                <label htmlFor="restrictionDescription">Descrição das restrições alimentares:</label>
                <input
                    type="text"
                    id="restrictionDescription"
                    name="restrictionDescription"
                    onChange={(e) => setRestrictionDescription(e.target.value)}
                />

                <div>
                    <input
                        type="checkbox"
                        id="photoAuth"
                        name="photoAuth"
                        onChange={(e) => setPhotoAuth(e.target.value)}
                    />
                    <label htmlFor="photoAuth">Autorização de fotos e vídeos da criança</label>
                </div>

                <label htmlFor="authorizedPeople">Lista de autorizados para buscar a criança:</label>
                <input
                    type="text"
                    id="authorizedPeople"
                    name="authorizedPeople"
                    onChange={(e) => setAuthorizedPeople(e.target.value)}
                />

                <label htmlFor="classNumber">Turma:</label>
                <select
                    name="classNumber"
                    value={classNumber}
                    onChange={(e) => setClassNumber(e.target.value)}
                >
                    <option value="none"></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <label htmlFor="additionalObs">Observações adicionais:</label>
                <input
                    type="text"
                    id="additionalObs"
                    name="additionalObs"
                    onChange={(e) => setAdditionalObs(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </div>
        </form>
    )
}

export default StudentForm