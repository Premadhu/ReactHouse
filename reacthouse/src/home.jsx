import Door from './door'
import Windows from './windows'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
function Home(){
    return(
       <>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
            <Grid container direction={'column'} sx={{height:'600px' , width:'500px' , p:'0', border:'1px solid black', bgcolor:'#a0a5a4ff'}}>
                <Grid container  direction={'column'} size={'grow'} sx={{border:'0.5px solid black'}}>
                    <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'} size={'grow'} sx={{px:'30px'}}>
                        <Grid><Windows /></Grid>
                        <Grid><Windows /></Grid>
                    </Grid>
                    <Grid display={'flex'} justifyContent={'center'} alignItems={'flexend'} size={'grow'} sx={{}}>
                        <Grid><Door /></Grid>
                    </Grid>
                </Grid>
                <Grid container  direction={'column'} size={'grow'} sx={{border:'0.5px solid black'}}>
                    <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'} size={'grow'} sx={{px:'30px'}}>
                        <Grid className="container1"><Windows isOpen="true" /></Grid>
                        <Grid className="container1"><Windows  isOpen="false" /></Grid>
                    </Grid>
                    <Grid display={'flex'} justifyContent={'center'} alignItems={'flexend'} size={'grow'}>
                        <Grid><Door /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
       </>
    );
}
export default Home