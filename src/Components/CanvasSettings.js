import React from 'react'
import { Button, Typography, Checkbox, Grid, Icon } from 'material-ui'

const mainColors = ['#FFFFFF', '#C0C0C0', '#808080', '#000000', '#FF0000', '#800000', '#FFFF00', '#808000',
                    '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'];
const rainbow = ["#fbb735", "#e98931", "#eb403b", "#b32E37", "#6c2a6a",
                  "#5c4399", "#274389", "#1f5ea8", "#227FB0", "#2ab0c5", "#39c0b3" ];
const pastel = ["#ffcccc", "#ffe0cc", "#ffeacc", "#fff4cc", "#fffecc", "#effac8",
                "#c7f5c4", "#c4f0f4", "#c4daf4", "#c9c4f4", "#e1c4f4", "#f6c6e6"];

const styles = {
  button: {margin:10,},
}

export default ({ tool, color, fill, fillColor, editFillColor, updateTool, updateSize, updateColor, updateFill, updateFillColor, updateEditFillColor }) =>

<Grid container style={{minHeight:800}}>
        <Grid item xs={12} style={{marginBottom:20}}>
            <Typography variant='display2'>Tool:</Typography>
            <Button variant="raised" size="large" color={tool == 'pencil' ? "secondary" : "primary"}
                onClick={() => updateTool('pencil')} style={styles.button}>Pencil</Button>
            <Button variant="raised" size="large" color={tool == 'line' ? "secondary" : "primary"}
                onClick={() => updateTool('line')} style={styles.button}>Line</Button>
            <Button variant="raised" size="large" color={tool == 'ellipse' ? "secondary" : "primary"}
                onClick={() => updateTool('ellipse')} style={styles.button}>Ellipse</Button>
            <Button variant="raised" size="large" color={tool == 'rectangle' ? "secondary" : "primary"}
                onClick={() => updateTool('rectangle')} style={styles.button}>Rectangle</Button>

            {(tool === 'ellipse' || tool === 'rectangle') ?
                  <Typography variant='headline'>Fill in: <Checkbox value={fill} style={{margin:'0 8'}} onChange={(e) => updateFill(!fill)} /></Typography>
            : ''}
        </Grid>

        <Grid item xs={12} style={{marginBottom:20}}>
            <Typography variant='display2'>Size:</Typography>
            <div>
                <Button variant="raised" size="large" color="primary" onClick={(e) => updateSize(1)} style={styles.button}> XS </Button>
                <Button variant="raised" size="large" color="primary" onClick={(e) => updateSize(5)} style={styles.button}> S </Button>
                <Button variant="raised" size="large" color="primary" onClick={(e) => updateSize(10)} style={styles.button}> M </Button>
                <Button variant="raised" size="large" color="primary" onClick={(e) => updateSize(15)} style={styles.button}> L </Button>
                <Button variant="raised" size="large" color="primary" onClick={(e) => updateSize(20)} style={styles.button}> XL </Button>
            </div>
        </Grid>

        <Grid item xs={12} style={{marginBottom:20}}>
            <Typography variant='display2'>Color:</Typography>
                <Typography variant='headline' style={{marginBottom:10}}>
                    <span style={!editFillColor ? {fontWeight:'bold', textDecoration:'underline'} : undefined} onClick={(e) => updateEditFillColor(0)}>Main Color:</span>
                      <Icon style={{color:color, fontSize:40, marginBottom:-10, textShadow:'0 0 1px black' }}>opacity</Icon>
                    <span style={editFillColor ? {fontWeight:'bold', textDecoration:'underline'} : undefined} onClick={(e) => updateEditFillColor(1)}>Fill Color:</span>
                      <Icon style={{color:fillColor, fontSize:40, marginBottom:-10, textShadow:'0 0 1px black' }}>opacity</Icon>
                </Typography>
            <div> {mainColors.map(function(colorToUse) { return <Button key={colorToUse} variant="raised" size="large"
                                                                          onClick={!editFillColor ? (e) => updateColor(colorToUse) : (e) => updateFillColor(colorToUse)}
                                                                          style={{background: colorToUse}} > </Button>}, this) }
            </div>
            <br/>
            <div> {rainbow.map(function(colorToUse) { return <Button key={colorToUse} variant="raised" size="large"
                                                                       onClick={!editFillColor ? (e) => updateColor(colorToUse) : (e) => updateFillColor(colorToUse)}
                                                                       style={{background: colorToUse}} > </Button>}, this) }
            </div>
            <br/>
            <div> {pastel.map(function(colorToUse) { return <Button key={colorToUse} variant="raised" size="large"
                                                                      onClick={!editFillColor ? (e) => updateColor(colorToUse) : (e) => updateFillColor(colorToUse)}
                                                                      style={{background: colorToUse}} > </Button>}, this) }
            </div>
        </Grid>
</Grid>
