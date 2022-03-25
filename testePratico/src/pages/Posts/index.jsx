import { AppBar,  Container,  Divider,  List,  ListItem,  ListItemText,  Toolbar,  Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import api from "../../services/api";


export default function UserPost(){
    const { id } = useParams();
    const [posts, setPosts] = useState([]);  

  

    

    useEffect(()=>{


        async function loadingUser(){
            
            const response = await api.get(`posts?userId=${id}`)
            
            setPosts(response.data)

            
        }

        loadingUser();

    }, []);



    return(
        <Container maxWidth='md' >

        <AppBar position="static" >
            <Toolbar >
                <Link to={`/detalhes/${id}`}style={{ textDecoration: 'none', marginTop: 7, marginRight: 5}}>
                    <ArrowBackIcon color="action" fontSize="medium"/>
                </Link>
                
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Posts 
                </Typography>

            </Toolbar>
        </AppBar>

        


        <List sx={{ 
                width: '100%', }}>

                {posts.map((post)=>{
                    return(
                        <>
                            <ListItem key={post.id} alignItems="center" sx={{ border:1, marginTop: 1}}>
                            
                                
                                <ListItemText
                                sx={{
                                    color:'#1976d2',
                                    fontWeight: 'bold',
                                    
                                }}
                                    primary={post.title}
                                    secondary={
                                        
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {post.body}
                                        </Typography>
                                    
                                    
                                    }
                                    />

                            </ListItem>
                            <Divider variant="fullWidth" component="li" />
                        </>
                        
                    )
                })}
            </List>
    </Container>
    )
}