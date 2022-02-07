import Grid from '@mui/material/Grid';

function App() {
    return (
	<Grid container spacing={4} id='container'>
	    <Grid item xs={12} md={6}>
		<div className='item'>
		</div>
	    </Grid>
	    <Grid item xs={12} md={3}>
		<div className='item'>
		</div>
	    </Grid>
	    <Grid item xs={12} md={3}>
		<div className='item'>
		</div>
	    </Grid>
	    <Grid item xs={6} md={8}>
		<div className='item'>
		</div>
	    </Grid>
	    <Grid item xs={6} md={4}>
		<div className='item'>
		</div>
	    </Grid>
	    <Grid item xs={12} md={12}>
		<div className='item'>
		</div>
	    </Grid>
	</Grid>
    );
}

export default App;
