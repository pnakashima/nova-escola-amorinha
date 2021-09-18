import { useEffect, useState } from "react"
import { Button, Checkbox, FormGroup } from "@mui/material"
import { TextField } from "@mui/material"
import { Box } from "@mui/system"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';


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
        <div className="student-form">
            <h1>Cadastro de Alunos</h1>
            <form onSubmit={handleSubmit}>
                <Box mb={4} sx={{ display: 'flex', flexDirection: 'column', mx: "auto", justifyContent: 'center', width: '100%', color: 'text-primary' }}>
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Nome"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ shrink: true, required: true }}
                        label="Data de nascimento"
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <br />

                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Responsável"
                        id="responsible"
                        value={responsible}
                        onChange={(e) => setResponsible(e.target.value)}
                    />
                    <br />

                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Telefone do responsável"
                        id="responsiblePhone"
                        value={responsiblePhone}
                        onChange={(e) => setResponsiblePhone(phoneMask(e))}
                    />
                    <br />

                    <FormControl fullWidth>
                        <InputLabel required id="select-emergency">Contato de Emergência</InputLabel>
                        <Select
                            fullwidth
                            labelId="select-emergency"
                            id="emergency"
                            value={emergency}
                            label="Selecione uma opção"
                            onChange={(e) => setEmergency(e.target.value)}
                        >
                            <MenuItem value={"Pais"}>Pais</MenuItem>
                            <MenuItem value={"Tios"}>Tios</MenuItem>
                            <MenuItem value={"Avós"}>Avós</MenuItem>
                            <MenuItem value={"Padrinhos"}>Padrinhos</MenuItem>
                        </Select>
                    </FormControl>
                    <br />

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Telefone para emergências"
                        id="emergencyPhone"
                        value={emergencyPhone}
                        onChange={(e) => setEmergencyPhone(phoneMask(e))}
                    />
                    <br />

                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id="foodRestriction"
                                    checked={foodRestriction}
                                    onChange={(e) => setFoodRestriction(handleCheck(e))}
                                    //onChange={(e) => setFoodRestriction(e.target.value)}
                                />
                            }
                            label="Possui restrição alimentar"
                        />
                    </FormGroup>

                    {foodRestriction && <>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Descrição das restrições alimentares:"
                            id="restrictionDescription"
                            value={restrictionDescription}
                            onChange={(e) => setRestrictionDescription(e.target.value)}
                        />
                    </>}
                    <br />

                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id="photoAuth"
                                    checked={photoAuth}
                                    onChange={(e) => setPhotoAuth(handleCheck(e))}
                                    //onChange={(e) => setPhotoAuth(e.target.value)}
                                />
                            }
                            label="Autorização de fotos e vídeos da criança"
                        />
                    </FormGroup>
                    <br />

                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Lista de autorizados para buscar a criança:"
                        id="authorizedPeople"
                        value={authorizedPeople}
                        onChange={(e) => setAuthorizedPeople(e.target.value)}
                    />
                    <br />

                    <FormControl fullWidth>
                        <InputLabel required id="select-classNumber">Turma</InputLabel>
                        <Select
                            fullwidth
                            labelId="select-classNumber"
                            id="classNumber"
                            value={classNumber}
                            label="Selecione uma opção"
                            onChange={(e) => setClassNumber(e.target.value)}
                        >
                            <MenuItem value={"1"}>1</MenuItem>
                            <MenuItem value={"2"}>2</MenuItem>
                            <MenuItem value={"3"}>3</MenuItem>
                            <MenuItem value={"4"}>4</MenuItem>
                        </Select>
                    </FormControl>
                    <br />

                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Observações adicionais"
                        id="additionalObs"
                        value={additionalObs}
                        onChange={(e) => setAdditionalObs(e.target.value)}
                    />
                    <br />

                    <Button type="submit" style={{ backgroundColor: '#0b1a72', color: '#FFF' }}>Cadastrar</Button>
                </Box>
            </form>
        </div>
    )
}

export default StudentForm