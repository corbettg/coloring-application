import React, { Fragment }from 'react'
import { AppBar, Toolbar, Typography, colors } from 'material-ui'

const styles = {
    AppBar: {
        background: colors.teal[700]
    }
}

export default props =>
<Fragment>
    <AppBar position='static' style={ styles.AppBar }>
        <Toolbar>
            <Typography variant='headline' color='inherit'>
                Randall Library Coloring Book Application
            </Typography>
        </Toolbar>
    </AppBar>
</Fragment>
