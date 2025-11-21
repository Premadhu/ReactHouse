import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'

function Windows(props){
    if(props.isOpen){
          return(
        <>
            <Grid container  sx={{width:'100px',height:'100px', border:'1px solid black', bgcolor:'#5cbeaaff'}}>
                    {/* <Grid size={'grow'} sx={{border:'0.5px solid black'}}><h4>opened</h4></Grid>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}></Grid> */}
                    <h4>opened</h4>
            </Grid>
            
        </>
    );     
        
    }
    else{
          return(
        <>
            <Grid container  sx={{width:'100px',height:'100px', border:'1px solid black', bgcolor:'#5cbeaaff'}}>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}></Grid>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}></Grid>
            </Grid>
            
        </>
    );     
    }
    
}
export default Windows