import { useLocation, useHistory } from "react-router"
import StudentForm from "../../components/StudentForm"
import api from "../../services/api"

const EditPage = () => {
    const location = useLocation()
    const history = useHistory()

    const student = location.state

    const saveChanges = async (student) => {
        const id = student.id
        const response = await api.put(`/students/${id}`, student)
        console.log(response.status)
        history.push('/')
    }

    return (
        <>
            <StudentForm student={student} submitFunc={saveChanges} />
        </>
    )
}

export default EditPage