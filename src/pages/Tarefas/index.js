// cSpell:Ignore descricao

import React, { useState } from 'react'
import { Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import Menu from '../Menu'

export default function Tarefas(){
    const [tarefas, setTarefas] = useState([])
    const valorInicial = {id: '', tipo: '', descricao: '', dataFim: ''}
    const [tarefa, setTarefa] = useState(valorInicial)

    const mudaAtributo = event => {
        const {name, value} = event.target;
        setTarefa({...tarefa, [name]: value})
    }

    function salvaRegistro(event){
        event.preventDefault()
        setTarefa({id: tarefa.id, tipo: tarefa.tipo, descricao: tarefa.descricao, dataFim: tarefa.dataFim})
        setTarefas([...tarefas, tarefas])
        setTarefa(valorInicial)
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
                        <TextField variant="outlined" margin="normal" required fullWidth type="number" id="id" name="id" label="Código da Tarefa" autoFocus value={tarefa.id} onChange={mudaAtributo} />
                        <TextField variant="outlined" margin="normal" required  fullWidth type="text" id="descricao" name="descricao" label="Descrição da Tarefa" value={tarefa.descricao} onChange={mudaAtributo}/>
                        <FormControl fullWidth={true}>
                            <InputLabel id="tipo"> Tipo da tarefa </InputLabel>
                            <Select labelId="tipo" id="tipo" value={tarefa.tipo} required onChange={e => setTarefa({...tarefa, tipo: e.target.value})}>
                                <MenuItem value="pessoal">Pessoal</MenuItem>
                                <MenuItem value="trabalho">trabalho</MenuItem>
                                <MenuItem value="faculdade">Faculdade</MenuItem>
                                
                            </Select>
                        </FormControl>
                        <TextField variant="outlined" margin="normal" required fullWidth id="dataFim" name="dataFim" label="Data Final" type="date" value={tarefa.dataFim} onChange={mudaAtributo} InputLabelProps={{shrink: true}} />
                        <Button type="submit" variant="contained" color="primary"><SaveIcon />Salvar</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>Listagem</p>
                </Grid>
            </Grid>
        </>
    )
}