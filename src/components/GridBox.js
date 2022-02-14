import Grid from '@mui/material/Grid';
import {useState} from 'react';

// state is a variable we care about and will rerender whenever it changes

export default function GridBox(){
    const [size, setSize] = useState(1);
    // [variable_name, function_to_change_variable] = useState(default_value);
    //let size = 4;
    const toggleSize = () => {
	setSize(((size + 1) % 12) + 1);
    };
    return (
	<Grid item xs={size}>
	    <div className='item'
		 onClick={toggleSize}>
	    </div>
	</Grid>
    );
}
