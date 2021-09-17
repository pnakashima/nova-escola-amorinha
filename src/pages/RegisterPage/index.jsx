import StudentForm from "../../components/StudentForm"
import api from "../../services/api"

const RegisterPage = () => {

    const registerStudent = async (student) => {
        await api.post('/students', student)
    }





    return (


        <StudentForm submitFunc={registerStudent} />

    )

}

export default RegisterPage