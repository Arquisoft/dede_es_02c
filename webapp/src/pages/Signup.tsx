import React, { useState, useEffect, FC } from 'react';
import Container from '@mui/material/Container';
import { Card, CardContent, Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const checkParams = (text: String) => {
    return text === "" || text == null;
}

const checkPasswords = (repPass: String, pass: String) => {
    return repPass != pass;
}

const SignUp: FC = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [repPass, setRepPass] = useState('')
    const [pulse, setPulse] = useState(false)
    return (
        <div>
            <Container component= "main" maxWidth="sm">
                <Card className={"main"} elevation={10} style={{display: "grid"}}>
                    <CardContent style={{display: "grid", textAlign: "center", margin: "auto"}}>
                        <Stack direction= "column" spacing={2}>
                            <TextField
                                id = "name" required
                                name = "Nombre"
                                label = "Nombre"
                                defaultValue = "Nombre"
                                variant = "outlined"
                                size = "small"
                                value = {name}
                                error = {checkParams(name) && pulse}
                                onChange = {e => setName(e.target.value)}
                            />

                            <TextField
                                id = "surname" required
                                name = "Apellido"
                                label = "Apellido"
                                defaultValue = "Apellido"
                                variant = "outlined"
                                size = "small"
                                value = {surname}
                                error = {checkParams(surname) && pulse}
                                onChange = {e => setSurname(e.target.value)}
                            />

                            <TextField
                                id = "email" required
                                name = "Correo electronico"
                                label = "Correo electronico"
                                defaultValue = "Correo electronico"
                                variant = "outlined"
                                size = "small"
                                value = {email}
                                error = {checkParams(email) && pulse}
                                onChange = {e => setEmail(e.target.value)}
                            />

                            <TextField
                                id = "pass" required
                                name = "Contraseña"
                                label = "Contraseña"
                                type= "password"
                                defaultValue= "Contraseña"
                                size="small"
                                variant="outlined"
                                value = {pass}
                                error = {checkParams(pass) && pulse}
                                onChange = {e => setPass(e.target.value)}
                            />

                            <TextField
                                id = "repPass" required
                                name = "Repetir Contraseña"
                                label = "Repetir Contraseña"
                                type= "password"
                                defaultValue= "Repetir Contraseña"
                                size="small"
                                variant="outlined"
                                value = {repPass}
                                error = {checkParams(repPass) && checkPasswords(repPass, pass) && pulse}
                                onChange = {e => setRepPass(e.target.value)}
                            />

                            <Button onClick={() => setPulse(true)} variant="contained" type="submit">Crear cuenta</Button>
                            <Link href = "/"></Link>

                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );

}
export default SignUp;