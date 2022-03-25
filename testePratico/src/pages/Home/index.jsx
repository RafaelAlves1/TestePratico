
import {  Container, Typography, } from '@mui/material';




import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Buscar from '../../Components/Search';



export default function Home(){


    return (
        

            <>
              <Container maxWidth="md">
                <AppBar position="static">
                    <Toolbar>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Lista de Usuários
                    </Typography>
                    
                    </Toolbar>
                </AppBar>
              </Container>
              <Buscar/>
            </>

    )
}








      

  
