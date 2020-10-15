import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Cabecalho from '../Cabecalho';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('tarefas');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <>
        <Cabecalho>

        </Cabecalho>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Tarefas" value="tarefas" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favoritos" value="favoritos" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Local" value="local" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Documentos" value="documentos" icon={<FolderIcon />} />
        </BottomNavigation>
    </>
  );
}
