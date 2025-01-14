import React, { useState, FC } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo from '../img/logo-dede.svg';
import { Card, CardContent } from '@mui/material';
import Link from '@mui/material/Link';
import { handleLogin } from '../api/ApiUsers';

const checkParams = (text: String) => {
    return text === "" || text == null;
}

const login = (idUser: String, pass: String) => {
    handleLogin(idUser, pass);
}


const LogIn: FC = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pulse, setPulse] = useState(false)

    function allFunc(idUser: String, pass: String){
        login(idUser, pass);
        setPulse(true);
    }

    return ( 
        <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Container component= "main" maxWidth="sm" fixed={true} 
            sx={{
                position: "center",
                top: 150
            }}>
                <Card className={"main"} elevation={10} style={{display: "grid"}}>
                    <CardContent style={{display: "grid", textAlign: "center", margin: "auto"}}>
                    <div role= "banner">
                        <img  width={300} height = {300}  src={logo} alt=""/>
                    </div>

                    <Stack direction= "column" spacing={2}>
                        
                            <TextField 
                                type= "text"
                                id = "email"
                                required
                                name = "Introduzca Correo Electronico"
                                label = "Correo"
                                variant="outlined"
                                size="small"
                                value = {email}
                                error = {checkParams(email) && pulse}
                                helperText={checkParams(email) && pulse ? 'La casilla no puede estar vacia' : ''}
                                onChange = {(e: any) => setEmail(e.target.value)}
                               // helperText = "Valor incorrecto"
                            />

                            <TextField 
                                id = "pass"
                                required
                                name = "cont"
                                label = "Introduza su contraseña"
                                type= "password"
                                size="small"
                                variant="outlined"
                                value = {pass}
                                error = {checkParams(pass) && pulse}
                                helperText={checkParams(pass) && pulse ? 'La casilla no puede estar vacia' : ''}
                                onChange = {(e: any) => setPass(e.target.value)}
                                // helperText = "Valor incorrecto"
                            />
        
                            <Button onClick={() => allFunc(email, pass)} variant="contained" type="submit">Iniciar Sesión</Button>
                            <Link href = "/signup">¿No tienes cuenta? Registrate ahora!</Link>
                        
                    </Stack>
                    
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default LogIn; 