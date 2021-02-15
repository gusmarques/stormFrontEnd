import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css';
import api from '../../services/api'
import {
  IconButton,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';

export default function TableUsers() {



  const [users, setUsers] = useState([])


  useEffect(() => {

    async function loadUsers() {
      const response = await api.get('/users', {

      })
      setUsers(response.data)
    }
    loadUsers();
  }, [])


  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#FFF",
      color: "##383838",
    },
    body: {
      fontSize: 14,

    }
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(2n+1)': { backgroundColor: "#F4F4F4" },
      '&:nth-of-type(2n)': { backgroundColor: "#E9E9E9" },

    },
  }))(TableRow);




  const useStyles = makeStyles({
    table: {
      boxShadow: '5px 0px 20px -2px #c1c1c1'
    },
    header: {
      backgroundColor: '#fff'
    },
    root: {
      color: '#000',
      background: '#fff'
    },
    btnPage: {
      padding: 10,
      backgroundColor: '#fff',
      marginTop: 0,
      marginRight: 5,
      marginLeft: 5,
      color: '#66666',
      fontSize: 'v4',
      textTransform: 'none'
    },
    containerNavigation: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 25,
      marginLeft: 5,
      marginRigth: 5

    },
    current: {
      padding: 10,
      marginTop: 0,
      marginRigth: 5,
      marginLeft: 5,
      background: '#D83367',
      color: '#fff'
    },
    tableContainer: {
      marginTop: 20,
      marginBottom: 20
    }
  });

  const classes = useStyles();
  return (

    <>


      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>

              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell >USUÁRIO</StyledTableCell>
              <StyledTableCell align="center">EMAIL</StyledTableCell>
              <StyledTableCell align="center">DATA DE INCLUSÃO</StyledTableCell>
              <StyledTableCell align="center">DATA DE ALTERAÇÃO</StyledTableCell>
              <StyledTableCell align="center">REGRAS</StyledTableCell>
              <StyledTableCell align="center">STATUS</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">AÇÕES</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <StyledTableRow key={item._id} className="row">
                <StyledTableCell align="center"><Checkbox checked={false} /></StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {item.nome}
                </StyledTableCell>
                <StyledTableCell align="center">{item.email}</StyledTableCell>
                <StyledTableCell align="center">{item.dateInclusion}</StyledTableCell>
                <StyledTableCell align="center">{item.dateChange}</StyledTableCell>
                <StyledTableCell align="center">{item.rules}</StyledTableCell>
                <StyledTableCell align="center" style={{color:'#31BA1F'}}>{item.status}</StyledTableCell>
                <StyledTableCell align="center" style={{ display: 'flex', marginTop: 12, opacity: 1 }}>
                  <IconButton size="small">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton size="small">
                    <CreateIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <MoreHorizIcon />
                </StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.containerNavigation}>
        <Button className={classes.btnPage}>Primeiro</Button>
        <Button className={classes.btnPage}>Anterior</Button>
        <Button variant="contained" color="default" className={classes.current}>
          1
      </Button>
        <Button className={classes.btnPage}>Próximo</Button>
        <Button className={classes.btnPage}>Último</Button>
      </div>
    </>
  )
}