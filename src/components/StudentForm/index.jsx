import { useEffect, useState } from "react"


const StudentForm = ({ student, submitFunc }) => {

    const [id, setId] = useState("")
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

    useEffect(() => {
        if (student) {
            setId(student.id)
            setName(student.name)
            setDob(student.dob)
            setResponsible(student.responsible)
            setResponsiblePhone(student.responsiblePhone)
            setEmergency(student.emergency)
            setEmergencyPhone(student.emergencyPhone)
            setFoodRestriction(student.foodRestriction)
            setRestrictionDescription(student.restrictionDescription)
            setPhotoAuth(student.photoAuth)
            setAuthorizedPeople(student.authorizedPeople)
            setClassNumber(student.classNumber)
            setAdditionalObs(student.additionalObs)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //const idGen = () => Math.floor((1 + Math.random()) * 0x1000000).toString(16)

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

    const handleCheck = (event) => {
        const inputValue = event.target.checked
        let checkValue = ""
        if (inputValue === true) {
            checkValue = "checked"
        }
        return checkValue
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const student = {
            id,
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

        submitFunc(student)
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="student-form">

                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="dob">Data de nascimento:</label>
                <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />

                <label htmlFor="responsible">Responsável:</label>
                <input
                    type="text"
                    id="responsible"
                    value={responsible}
                    onChange={(e) => setResponsible(e.target.value)}
                />

                <label htmlFor="responsiblePhone">Telefone do responsável:</label>
                <input
                    type="text"
                    id="responsiblePhone"
                    value={responsiblePhone}
                    onChange={(e) => setResponsiblePhone(phoneMask(e))}
                />

                <label htmlFor="emergency">Contato de emergência:</label>
                <select
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
                    value={emergencyPhone}
                    onChange={(e) => setEmergencyPhone(phoneMask(e))}
                />

                <div>
                    <input
                        type="checkbox"
                        id="foodRestriction"
                        checked={foodRestriction}
                        onChange={(e) => setFoodRestriction(handleCheck(e))}
                    />
                    <label htmlFor="foodRestriction">Possui restrição alimentar</label>
                </div>
                {foodRestriction && <>
                <label htmlFor="restrictionDescription">Descrição das restrições alimentares:</label>
                <input
                    type="text"
                    id="restrictionDescription"
                    value={restrictionDescription}
                    onChange={(e) => setRestrictionDescription(e.target.value)}
                />
                </>}

                <div>
                    <input
                        type="checkbox"
                        id="photoAuth"
                        checked={photoAuth}
                        onChange={(e) => setPhotoAuth(handleCheck(e))}
                    />
                    <label htmlFor="photoAuth">Autorização de fotos e vídeos da criança</label>
                </div>

                <label htmlFor="authorizedPeople">Lista de autorizados para buscar a criança:</label>
                <input
                    type="text"
                    id="authorizedPeople"
                    value={authorizedPeople}
                    onChange={(e) => setAuthorizedPeople(e.target.value)}
                />

                <label htmlFor="classNumber">Turma:</label>
                <select
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
                    value={additionalObs}
                    onChange={(e) => setAdditionalObs(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </div>
        </form>
    )
}

export default StudentForm