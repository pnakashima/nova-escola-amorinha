

// const alunos = [
//     {
//         name: "Paulo",
//         dob: "19/08/1976",
//         responsible: "Nevine",
//         responsiblePhone: "(11)11111-1111",
//         emergency: "Pais",
//         emergencyPhone: "(22)22222-2222",
//         foodRestricion: true,
//         restrictionDescription: "maracujá e goiaba",
//         photoAuth: true,
//         authorizedPeople: "Nevine",
//         classNumber: "1",
//         additionalObs: "Nenhuma"
//     }
// ]

const ListItem = ({ student, onEdit, onDelete }) => {
    return (
        <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.dob}</td>
            <td>{student.classNumber}</td>
            <td>{student.emergencyPhone}</td>
            <td>{student.emergency}</td>
            <td><button onClick={()=>onEdit(student.id)}>Editar</button></td>
            <td><button onClick={()=>onDelete(student.id)}>Excluir</button></td>
        </tr>
    )
}


export default ListItem