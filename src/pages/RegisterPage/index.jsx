import { useHistory } from "react-router"
import StudentForm from "../../components/StudentForm"
import api from "../../services/api"
import Swal from "sweetalert2"

const RegisterPage = () => {

    const history = useHistory()

    const registerStudent = async (student) => {
        try {
            await api.post('/students', student)
            openSuccessModal()
        } catch (error) {

        }
    }

    const openSuccessModal = (title, message, icon) => {
        Swal.fire({
            title: 'Aluno cadastrado!\nDeseja cadastrar outro aluno?',
            showDenyButton: true,
            confirmButtonText: 'Sim',
            confirmButtonColor: "#0b1a72",
            denyButtonText: 'Não',
            denyButtonColor: "#0b1a72",
            buttonsStyling: true,
        }).then((result) => {
            if (result.isConfirmed) {
                history.go(0)
            } else if (result.isDenied) {
                history.push('/')
            }
        })
    }

    return (
        <StudentForm submitFunc={registerStudent} />
    )
}

export default RegisterPage