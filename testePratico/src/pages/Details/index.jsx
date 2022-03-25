import {useEffect, useState} from 'react'

import { AppBar, Button, Container, Divider, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useParams, useNavigate } from 'react-router-dom'
import api from "../../services/api";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/system';






export default function Details(){
    const { id } = useParams();

    const [detailUser, setDetailUser] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>{

        async function loadingUser(){

            const response = await api.get(`users/${id}`);
            
            setDetailUser(response.data)
            setLoading(false)
            

        }

        loadingUser();

        


    }, [id])

    if(loading){
        return(
            
            <Container maxWidth='md'>
                <AppBar position="static" >
                    <Toolbar >
                        
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Carregando Detalhes... 
                        </Typography>

                    </Toolbar>
                </AppBar>
                


            </Container>
        )
    }

    return(
        <Container maxWidth='md' >

        <AppBar position="static" >
            <Toolbar >
                <Link to="/" style={{ textDecoration: 'none', marginTop: 7, marginRight: 5}}>
                    <ArrowBackIcon color="action" fontSize="medium"/>
                </Link>
                
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Detalhes 
                </Typography>

            </Toolbar>
        </AppBar>

        <Box mt={3} sx={{
            width: '100%',
            
            border: 1,
            padding: 5
            
        }}>

                
                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' , marginBottom: 1, marginTop: 2 }}
                >
                   <Typography sx={{
                       marginRight: 1
                   }}> Name:</Typography> {detailUser.name}
                </Typography>

                <Divider variant="fullWidth"  />

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' , marginBottom: 1, marginTop: 2 }}
                >
                   <Typography sx={{
                       marginRight: 1
                   }}> User:</Typography> {detailUser.username}
                </Typography>

                <Divider variant="fullWidth"  />
                
                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' , marginBottom: 1, marginTop: 2 }}
                >
                   <Typography sx={{
                       marginRight: 1
                   }}> Email:</Typography> {detailUser.email}
                </Typography>

                <Divider variant="fullWidth"  />


                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' ,  marginTop: 2 }}
                >
                Address
                </Typography>

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' , marginBottom: 1, marginTop: 1 }}
                >
                    <Typography sx={{
                       marginRight: 1
                   }}> Street:</Typography> 
                {detailUser.address.street}
                </Typography>

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center',
                        marginBottom: 1, 
                        marginTop: 2 }}
                >
                    <Typography sx={{
                       marginRight: 1
                   }}> Suite:</Typography> 
                {detailUser.address.suite}
                </Typography>

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center' , 
                        marginBottom: 1, 
                        marginTop: 2 }}
                >
                    <Typography sx={{
                       marginRight: 1
                   }}> City:</Typography> 
                {detailUser.address.city}
                </Typography>

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center',
                        marginBottom: 1, 
                        marginTop: 2 }}
                >
                    <Typography sx={{
                       marginRight: 1
                   }}> Zipcode:</Typography> 
                {detailUser.address.zipcode}
                </Typography>


                <Divider variant="fullWidth"  />

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center' , 
                        marginBottom: 1, 
                        marginTop: 2 }}
                >
                    <Typography sx={{
                       marginRight: 1
                   }}> Phone:</Typography> 
                {detailUser.phone}
                </Typography>

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center' , 
                        marginBottom: 1, 
                        marginTop: 2 }}
                >
                    <Typography sx={{
                       marginRight: 1
                   }}> Website:</Typography> 
                {detailUser.website}
                </Typography>


                <Divider variant="fullWidth"  />


                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center' ,  
                        marginTop: 2 }}
                >
                Company
                </Typography>

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center' , 
                        marginBottom: 1, 
                        marginTop: 1 
                    }}
                >
                    <Typography sx={{
                       marginRight: 1
                   }}> Name:</Typography> 
                {detailUser.company.name}
                </Typography>

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center' , 
                        marginBottom: 1, 
                        marginTop: 2 
                    }}
                >
                    <Typography sx={{
                       marginRight: 1
                   }}> CatchPhrase:</Typography> 
                {detailUser.company.catchPhrase}
                </Typography>

                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        alignItems: 'center' , 
                        marginBottom: 1, 
                        marginTop: 2, 
                    }}

                >
                    <Typography sx={{
                       marginRight: 1
                   }}> BS:</Typography> 
                {detailUser.company.bs}
                </Typography>     


                <Link to={`/posts/${id}`} 
                style={{ 
                    textDecoration: 'none'
                    }} >
                    <Button variant='contained'>
                        Ver Posts
                    </Button>
                </Link>                              


        </Box>


        

    </Container>
    )
}