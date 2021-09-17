

const ListItem = ({ student, onEdit, onDelete }) => {
    return (
        <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.dob}</td>
            <td>{student.classNumber}</td>
            <td>{student.emergencyPhone}</td>
            <td>{student.emergency}</td>
            <td>{student.id}</td>
            <td><button onClick={()=>onEdit(student.id)}>Editar</button></td>
            <td><button onClick={()=>onDelete(student.id)}>Excluir</button></td>
        </tr>
    )
}

export default ListItem