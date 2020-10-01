// cSpell:Ignore Cabecalho servicos
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ApartmentIcon from '@material-ui/icons/Apartment'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles} from '@material-ui/core/styles'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme)=> ({
    toolbarTitle: {
        flex: 1
    },
    toolbarSecundaria: {
        justifyContent: "space-between"
    },
    toolbarLink:{
        padding: theme.spacing(1)
    }
}))

const Cabecalho = () => {
    const titulo = 'Shinkai Business'
    const secoes = [
        {titulo: 'Produtos', url: '/produtos'},
        {titulo: 'Serviços', url: '/servicos'},
        {titulo: 'SAC', url: '/sac'},
        {titulo: 'FAQ', url: '/faq'},
        {titulo: 'Área Reservada', url: '/login'},
    ]
    const classes = useStyles()
    return(
        <>
        <AppBar position="relative">
            <Toolbar>
                <ApartmentIcon/>
                <Typography component="h1" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
                    {titulo}
                </Typography>
                <Button variant="contained" color="secondary" size="small" href="/login">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecundaria}>
            {secoes.map((secao) => (
                <Link color="secondary" variant="body2" noWrap key={secao.titulo} href={secao.url} className={classes.toolbarLink}> {secao.titulo} </Link>
            ))}
        </Toolbar>
        </>
    )
}

export default Cabecalho