import ListItem from "../../components/ListItem"
import api from "../../services/api"
import { useEffect, useState } from "react"

const DirectoryPage = () => {

    const [students, setStudents] = useState([])
    const [displayStudents, setDisplayStudents] = useState([])

    const getInfo = async () => {
        try {
            const students = await api.get('/students')
            // const info = { triggers: triggers.data, channels: channels.data, messages: messages.data }
            // dispatch(loadInfo(info))
            setStudents(students.data)
            setDisplayStudents(students.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getInfo()
    }, [])


    const editStudent = async (id) => {
        console.log("Edit", id)
        const teste = { name: "Minerva", dob: "21/09/2000", classNumber: 3, emergencyPhone: "(44)44444-4444", emergency: "Padrinhos" }
        const response = await api.put(`/students/${id}`, teste)
        console.log(response.status)
    }

    const deleteStudent = async (id) => {
        console.log("Delete", id)
        const response = await api.delete(`/students/${id}`)
        console.log(response.status)
    }

    const search = (event) => {
        const { value } = event.target
        const list = students.filter(student => student.name.toLowerCase().includes(value.toLowerCase()))
        setDisplayStudents(list)
    }



    // const body = {
    //     "name": "Paulo",
    //     "dob": "19/08/1976",
    //     "responsible": "Nevine",
    //     "responsiblePhone": "(11)11111-1111",
    //     "emergency": "Pais",
    //     "emergencyPhone": "(22)22222-2222",
    //     "foodRestricion": true,
    //     "restrictionDescription": "maracujá e goiaba",
    //     "photoAuth": true,
    //     "authorizedPeople": "Nevine",
    //     "classNumber": "1",
    //     "additionalObs": "Nenhuma"
    // }

    // const postMessage = async (body) => await api.post('/students', body)

    // postMessage(body)

    return (
        <>
            <div className="students-list">
                <input onChange={search} size="50" placeholder="Pesquisar aluno..." />
            </div>
            <div className="students-list">
                <table border="1" id="message-list-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Data de Nascimento</th>
                            <th>Turma</th>
                            <th>Telefone para Emergências</th>
                            <th>Contato para Emergências</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayStudents.map((student, index) => <ListItem key={index} student={student} onEdit={editStudent} onDelete={deleteStudent} />)}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default DirectoryPage