import ListItem from "../../components/ListItem"
import api from "../../services/api"
import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'

const DirectoryPage = () => {

    const [students, setStudents] = useState([])
    const [displayStudents, setDisplayStudents] = useState([])

    const history = useHistory()

    const getInfo = async () => {
        try {
            const students = await api.get('/students')
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
        const response = await api.get(`/students?id=${id}`)
        history.push('/edit', response.data[0])
    }

    const deleteStudent = async (id) => {
        console.log("Delete", id)
        const response = await api.delete(`/students/${id}`)
        console.log(response)
        history.go(0)
    }

    const search = (event) => {
        const { value } = event.target
        const list = students.filter(student => student.name.toLowerCase().includes(value.toLowerCase()))
        setDisplayStudents(list)
    }


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
                            <th>ID</th>
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