// cSpell:Ignore descricao

import React, { useEffect, useState } from 'react'
import { Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Paper } from '@material-ui/core'

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core'


import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Menu from '../Menu'

export default function Tarefas(){
    const [tarefas, setTarefas] = useState([])
    const valorInicial = {id: '', tipo: '', descricao: '', dataFim: ''}
    const [tarefa, setTarefa] = useState(valorInicial)
    const [editando, setEditando] = useState(false)
    const hoje = new Date().toISOString().slice(0,10)
    

    useEffect(()=>{
        let dados = JSON.parse(localStorage.getItem('tarefas'))
        setTarefas(dados)
    },[])
    useEffect(()=>{
        function salvaDados(){
            localStorage.setItem('tarefas', JSON.stringify(tarefas))
        }
        salvaDados()
    },[tarefas])

    const mudaAtributo = event => {
        const {name, value} = event.target;
        setTarefa({...tarefa, [name]: value})
    }

    const apagaRegistro = id => {
        let index = tarefas.map((tarefa) => tarefa.id).indexOf(id);

        if(index > -1){
            tarefas.splice(index, 1)
            // o 1º parametro é o indice do array e o 2º é o numero de itens a serem removidos
            setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
        }
    }

    function salvaRegistro(event){
        event.preventDefault()
        if(editando){
            apagaRegistro(tarefa.id)
        }
        setTarefa({id: tarefa.id, tipo: tarefa.tipo, descricao: tarefa.descricao, dataFim: tarefa.dataFim})
        setTarefas([...tarefas, tarefa])
        setTarefa(valorInicial) // limpa os inputs
        setEditando(false)
    }

    function converteData(data){
        return new Date(data).toLocaleDateString('pt-BR',{timeZone: 'UTC'})
    }

    return(
        <>
            <Menu/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={salvaRegistro}>
                        <Typography component="h1" align="center">
                            Cadastro de tarefas
                        </Typography>
                        <TextField variant="outlined" margin="normal" required fullWidth type="number" id="id" name="id" label="Código da Tarefa" autoFocus value={tarefa.id} onChange={mudaAtributo} disabled={editando} />
                        <TextField variant="outlined" margin="normal" required  fullWidth type="text" id="descricao" name="descricao" label="Descrição da Tarefa" value={tarefa.descricao} onChange={mudaAtributo}/>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel htmlFor="outlined-age-native-simple" id="tipo"> Tipo da tarefa </InputLabel>
                            <Select labelId="tipo" id="tipo" value={tarefa.tipo} required onChange={e => setTarefa({...tarefa, tipo: e.target.value})}>
                                <MenuItem value="pessoal">Pessoal</MenuItem>
                                <MenuItem value="trabalho">trabalho</MenuItem>
                                <MenuItem value="faculdade">Faculdade</MenuItem>
                                
                            </Select>
                        </FormControl>
                        <TextField variant="outlined" margin="normal" required fullWidth id="dataFim" name="dataFim" label="Data Final" type="date" value={tarefa.dataFim} onChange={mudaAtributo} inputProps={{min: hoje}} InputLabelProps={{shrink: true}} />
                        <Button type="submit" variant="contained" color="primary"><SaveIcon />Salvar</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography component="h1" align="center">
                        Listagem de tarefas
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="Relação de tarefas">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Código</TableCell>
                                    <TableCell>Tipo</TableCell>
                                    <TableCell>Descrição</TableCell>
                                    <TableCell>Data Final</TableCell>
                                    <TableCell>Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tarefas.map((t) => (
                                    <TableRow key={t.id}>
                                        <TableCell>{t.id}</TableCell>
                                        <TableCell>{t.tipo}</TableCell>
                                        <TableCell>{t.descricao}</TableCell>
                                        <TableCell>{converteData(t.dataFim)}</TableCell>
                                        <TableCell>
                                            <Button startIcon={<DeleteIcon/>} onClick={() => apagaRegistro(t.id)} variant="outlined" color="primary">Apagar</Button>
                                            <Button startIcon={<EditIcon/>} onClick={() => {setTarefa(t); setEditando(true)}}  variant="outlined" color="secondary">Editar</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}