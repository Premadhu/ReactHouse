import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import { useState } from "react"
function Door(){
    const [isOpen , setIsOpen] = useState(false);
    if(isOpen){
        return(
        <Grid container  sx={{width:'110px',height:'160px', border:'1px solid black', bgcolor:'#5cbeaaff'}}>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}></Grid>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}></Grid>
        </Grid>
        );
    }
    else{
        return(
        <Grid container  sx={{width:'110px',height:'160px', border:'1px solid black', bgcolor:'#5cbeaaff'}}>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}>opened</Grid>
                    <Grid size={'grow'} sx={{border:'0.5px solid black'}}></Grid>
        </Grid>
    );
    }
}
export default Door