import ListItem from "../../components/ListItem"
import api from "../../services/api"
import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { Box } from "@mui/system"
import { TextField } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <Box m={4} sx={{ display: 'flex', flexDirection: 'column', mx: "auto", justifyContent: 'center', width: '80%', color: 'text-primary' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Pesquisar aluno..."
                    id="search"
                    onChange={search}
                />
                <br />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Data de Nascimento</TableCell>
                                <TableCell>Turma</TableCell>
                                <TableCell>Telefone para Emergências</TableCell>
                                <TableCell>Contato para Emergências</TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Editar</TableCell>
                                <TableCell>Excluir</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayStudents.map((student, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {student.name}
                                    </TableCell>
                                    <TableCell>{student.dob}</TableCell>
                                    <TableCell>{student.classNumber}</TableCell>
                                    <TableCell>{student.emergencyPhone}</TableCell>
                                    <TableCell>{student.emergency}</TableCell>
                                    <TableCell>{student.id}</TableCell>
                                    <TableCell><EditIcon onClick={() => editStudent(student.id)} /></TableCell>
                                    <TableCell><DeleteIcon onClick={() => deleteStudent(student.id)} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )

}

export default DirectoryPage