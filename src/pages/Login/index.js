// cSpell: Ignore usuario
import React, { useEffect } from 'react'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

/* Icons */
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'


const useStyles = makeStyles(theme => ({
    container:{
        position: "absolute",
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    paper: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    button:{
        padding: '15px',
        margin: '10px 0'
    }
}))

export default function Login(){
    const classes= useStyles();

    //Redireciona a página
    const history = useHistory()

    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [erro, setErro] = React.useState(false)
    const [mensagemErro, setMensagemErro] = React.useState('')
    const [lembrarUsuario, setLembrarUsuario] = React.useState(false)
    const [btnDesabilitado, setBtnDesabilitado] = React.useState(true)

    useEffect(() => {
        if(email.trim() && senha.trim()){
            setBtnDesabilitado(false)
        }
        else{
            setBtnDesabilitado(true)
        }
    }, [email,senha])

    function alteraLembrar(){
        setLembrarUsuario(!lembrarUsuario)
    }

    function validaLogin(event){
        event.preventDefault()
        if(email === process.env.REACT_APP_USER && senha === process.env.REACT_APP_PASSWORD){
            localStorage.setItem("logado", btoa(email))
            history.push('/menu')
        }
        else {
            setErro(true)
            setMensagemErro('Usuário e/ou senha incorretos')
        }
    }

    return(
        <Container className={classes.container} component="main" maxWidth="xs">
            <Paper elevation={2}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h2">
                        Area Reservada
                    </Typography>
                    <form onSubmit={validaLogin}>
                        <TextField variant="outlined" fullWidth required id="email" label="Endereço de email" autoComplete="email" autoFocus value={email} onChange={event => setEmail(event.target.value)} error={erro} margin="normal"></TextField>
                        <TextField variant="outlined" fullWidth required id="senha" label="Senha" autoComplete="current.password" value={senha} onChange={e => setSenha(e.target.value)} error={erro} helperText={mensagemErro} type="password" margin="normal"></TextField>
                        <FormControlLabel
                            control={
                                <Switch checked={lembrarUsuario} onChange={alteraLembrar} name="Lembrar" disabled={false} />
                                    
                            }
                            label="Lembrar Usuário"
                        />
                        <Button disabled={btnDesabilitado} className={classes.button} type="submit" fullWidth variant="contained" color="primary"><LockOutlinedIcon/>Acessar</Button>
                        <Button fullWidth variant="outlined" color="secondary" href="/">Voltar ao início</Button>
                    </form>
                </div>
            </Paper>
        </Container>
    )
}