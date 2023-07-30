import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <button>1</button>
                </Grid>
                <Grid item xs={6}>
                    <button>2</button>
                </Grid>
            </Grid>
        </Box>
    );
}
