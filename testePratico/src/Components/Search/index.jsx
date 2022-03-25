import { Box, Button, Container, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";


// estilos do input

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  padding: 5
  
  
}));



export default function Buscar(){
    const [users, setUsers] = useState([]);  

    const [searchTerm, setSearchTerm] = useState('')


    useEffect(()=>{

        async function loadingUser(){
            
            const response = await api.get('users')
            
            setUsers(response.data)

        }

        loadingUser();  

    }, []);

    return(
        <Container maxWidth="md">

           <Box mt={2} 
            sx={{
                border: 1,
                borderRadius: 2,
                width: '100%'
            }}
           >
           <Search>
                
                <StyledInputBase
                placeholder="Buscar Usuários"
                inputProps={{ 'aria-label': 'search' }}
                onChange={event => {setSearchTerm(event.target.value)}} 
                /> 
            </Search>
           </Box>

            
            <List sx={{ 
                width: '100%', }}>
                {users.filter((user) => {
                    if(searchTerm == ""){ 
                        return user
                    }else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())){ 
                        return user 
                    }else if (user.username.toLowerCase().includes(searchTerm.toLowerCase())){ 
                        return user
                    }
                }).map((user)=>{
                    return(
                        <>
                            <ListItem 
                                key={user.id} 
                                alignItems="center" 
                                sx={{ 
                                    border:1, 
                                    marginTop: 1}}>
                                <ListItemText
                                    primary={user.name}
                                    secondary={
                                        <Typography
                                            sx={{ 
                                                display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                        >
                                            {user.username}
                                        </Typography>
                              
                                    }
                                    />
                                    <Link to={`/detalhes/${user.id}`} 
                                    style={{ 
                                        textDecoration: 'none'}} >
                                        <Button variant='contained'>
                                        Detalhes
                                        </Button>
                                    </Link>
                            </ListItem>
                            <Divider variant="fullWidth" component="li" />
                        </>
                        
                    )
                })}
            </List>
        </Container>

       
    )
}