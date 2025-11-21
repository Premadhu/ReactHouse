import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { useState } from "react"
function Door(){
    const [isOpen , setIsOpen] = useState(false);////Using dynamic status
    // if(isOpen){
        return(
            <>
        <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Door" : "Open Door"}
      <Grid container  sx={{width:'110px',height:'160px', border:'1px solid black', bgcolor:'#5cbeaaff'}}>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}></Grid>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}></Grid>
        </Grid></button>
       
        </>
      
    
        );
    // }
    // else{
        return(
        <Grid container  sx={{width:'110px',height:'160px', border:'1px solid black', bgcolor:'#5cbeaaff'}}>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}>{isOpen ? 'opened' : 'closed'}</Grid>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}></Grid>
        </Grid>
    );
    // }
}
export default Door