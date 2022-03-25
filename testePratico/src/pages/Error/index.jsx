import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Error(){
    return (
        <>
            <Container maxWidth="md">
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
                            INICIO 
                        </Typography>

                    </Toolbar>
                </AppBar>
                

            </Container>

            <Container maxWidth="md">
                <Box mt={5}>
                    <Typography
                            variant="h3"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'center' }}
                        >
                            404
                    </Typography>
                    <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'center', marginTop: 2 }}
                        >
                            Essa página não existe 
                    </Typography>
                </Box>
                
            </Container>
        </>
    )
}