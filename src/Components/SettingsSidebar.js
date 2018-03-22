import React from 'react'
import { Button } from 'material-ui'

const mainColors = ['#FFFFFF', '#C0C0C0', '#808080', '#000000', '#FF0000', '#800000', '#FFFF00', '#808000', 
                    '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'];
const rainbow = ["#fbb735", "#e98931", "#eb403b", "#b32E37", "#6c2a6a",
                  "#5c4399", "#274389", "#1f5ea8", "#227FB0", "#2ab0c5", "#39c0b3" ];
const pastel = ["#ffcccc", "#ffe0cc", "#ffeacc", "#fff4cc", "#fffecc", "#effac8",
                "#c7f5c4", "#c4f0f4", "#c4daf4", "#c9c4f4", "#e1c4f4", "#f6c6e6"];

var colorButtons = mainColors.map(function(colorToUse) { 
                       return <Button variant="raised" size="small" onClick={(e) => this.setState({color: '#FFA500' })}
                                      style={{background: colorToUse}} > </Button>
                   })

export default ({ tool, updateTool, updateSize, updateColor }) =>


<div style={{minHeight:1050}}>
    <hr/>
{console.log(tool)}
    <div style={{float:'left'}}>
        <div className="tools" style={{marginBottom:20}}>
        <button
            style={tool == 'pencil' ? {fontWeight:'bold'} : undefined}
            className={tool == 'pencil'  ? 'item-active' : 'item'}
            onClick={() => updateTool('pencil')}
        >Pencil</button>
        <button
            style={tool == 'line' ? {fontWeight:'bold'} : undefined}
            className={tool == 'line'  ? 'item-active' : 'item'}
            onClick={() => updateTool('line')}
        >Line</button>
        <button
            style={tool == 'ellipse' ? {fontWeight:'bold'} : undefined}
            className={tool == 'ellipse'  ? 'item-active' : 'item'}
            onClick={() => updateTool('ellipse')}
        >Ellipse</button>
        <button
            style={tool == 'rectangle' ? {fontWeight:'bold'} : undefined}
            className={tool == 'rectangle'  ? 'item-active' : 'item'}
            onClick={() => updateTool('rectangle')}
        >Rectangle</button>
        </div>

        {/* <div className="options" style={{marginBottom:20}}>
            <label htmlFor="">size: </label>
            <input min="1" max="20" type="range" value={size} onChange={(e) => onClick(size: parseInt(e.target.value))} />
        </div> */}

        <div>
            <Button variant="raised" size="small" color="primary" onClick={(e) => updateSize(1)} > XS </Button>
            <Button variant="raised" size="small" color="primary" onClick={(e) => updateSize(5)}> S </Button>
            <Button variant="raised" size="small" color="primary" onClick={(e) => updateSize(10)}> M </Button>
            <Button variant="raised" size="small" color="primary" onClick={(e) => updateSize(15)}> L </Button>
            <Button variant="raised" size="small" color="primary" onClick={(e) => updateSize(20)}> XL </Button>
        </div>
        <div><h1>Colors:</h1></div>


        {/* <div className="options" style={{marginBottom:20}}>
            <label htmlFor="">color: </label>
            <input type="color" value={color} onChange={(e) => this.setState({color: e.target.value})} />
        </div> */}
        
        {/* {(this.state.tool == TOOL_ELLIPSE || this.state.tool == TOOL_RECTANGLE) ?
            <div>
                <label htmlFor="">fill in:</label>
                <input type="checkbox" value={fill} style={{margin:'0 8'}}
                        onChange={(e) => this.setState({fill: e.target.checked})} />
                {fill ? <span>
                    <label htmlFor="">with color:</label>
                    <input type="color" value={fillColor} onChange={(e) => this.setState({fillColor: e.target.value})} />
                </span> : ''}
            </div> 
        : ''} */}

    </div>
    
    <br/>
    <div> {mainColors.map(function(colorToUse, ) { 
                    return <Button key={colorToUse} variant="raised" size="large" onClick={(e) => updateColor(colorToUse)}
                                    style={{background: colorToUse}} > </Button>
                }, this)}
    </div>
    <br/>
    <div> {rainbow.map(function(colorToUse, ) { 
                    return <Button key={colorToUse} variant="raised" size="large" onClick={(e) => updateColor(colorToUse)}
                                    style={{background: colorToUse}} > </Button>
                }, this)}
    </div>
    <br/>
    <div> {pastel.map(function(colorToUse, ) { 
                    return <Button key={colorToUse} variant="raised" size="large" onClick={(e) => updateColor(colorToUse)}
                                    style={{background: colorToUse}} > </Button>
                }, this)}
    </div>

</div>
