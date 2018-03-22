import React, { Component } from 'react'
import { SketchPad, TOOL_PENCIL, TOOL_LINE, TOOL_RECTANGLE, TOOL_ELLIPSE } from '../../node_modules/react-sketchpad/lib'
import { Button } from 'material-ui'

const mainColors = ['#FF0000', '#FFC0CB', '#800080', '#4B0082', '#0000FF', '#00FFFF', 
                    '#006666', '#008000', '#90EE90', '#00FF00', '#FFFF00', '#FFA500'];

var colorButtons = mainColors.map(function(colorToUse) { 
                       return <Button variant="raised" size="small" onClick={(e) => this.setState({color: '#FFA500' })}
                                      style={{background: colorToUse}} > </Button>
                   })

export default class SketchExample extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      tool:TOOL_PENCIL,
      size: 2,
      color: '#000000',
      fill: false,
      fillColor: '#444444',
      items: []
    }
  }

  render() {
    const { tool, size, color, fill, fillColor, items } = this.state;
    return (
      <div>
        <hr/>
        <div style={{float:'left', marginRight:20, border: '5px solid #006666'}}>
          <SketchPad
            width={1200}
            height={500}
            animate={true}
            size={size}
            color={color}
            fillColor={fill ? fillColor : ''}
            items={items}
            tool={tool}
          />
        </div>
        <div style={{float:'left'}}>
          <div className="tools" style={{marginBottom:20}}>
            <button
              style={tool == TOOL_PENCIL ? {fontWeight:'bold'} : undefined}
              className={tool == TOOL_PENCIL  ? 'item-active' : 'item'}
              onClick={() => this.setState({tool:TOOL_PENCIL})}
            >Pencil</button>
            <button
              style={tool == TOOL_LINE ? {fontWeight:'bold'} : undefined}
              className={tool == TOOL_LINE  ? 'item-active' : 'item'}
              onClick={() => this.setState({tool:TOOL_LINE})}
            >Line</button>
            <button
              style={tool == TOOL_ELLIPSE ? {fontWeight:'bold'} : undefined}
              className={tool == TOOL_ELLIPSE  ? 'item-active' : 'item'}
              onClick={() => this.setState({tool:TOOL_ELLIPSE})}
            >Ellipse</button>
            <button
              style={tool == TOOL_RECTANGLE ? {fontWeight:'bold'} : undefined}
              className={tool == TOOL_RECTANGLE  ? 'item-active' : 'item'}
              onClick={() => this.setState({tool:TOOL_RECTANGLE})}
            >Rectangle</button>
          </div>
          <div className="options" style={{marginBottom:20}}>
            <label htmlFor="">size: </label>
            <input min="1" max="20" type="range" value={size} onChange={(e) => this.setState({size: parseInt(e.target.value)})} />
          </div>

          <div>
            <Button variant="raised" size="small" color="primary" onClick={(e) => this.setState({size: 1})} > S </Button>
            <Button variant="raised" size="small" color="primary" onClick={(e) => this.setState({size: 10})}> M </Button>
            <Button variant="raised" size="small" color="primary" onClick={(e) => this.setState({size: 20})}> L </Button>
          </div>


          <div className="options" style={{marginBottom:20}}>
            <label htmlFor="">color: </label>
            <input type="color" value={color} onChange={(e) => this.setState({color: e.target.value})} />
          </div>
          {(this.state.tool == TOOL_ELLIPSE || this.state.tool == TOOL_RECTANGLE) ?
            <div>
              <label htmlFor="">fill in:</label>
              <input type="checkbox" value={fill} style={{margin:'0 8'}}
                     onChange={(e) => this.setState({fill: e.target.checked})} />
              {fill ? <span>
                  <label htmlFor="">with color:</label>
                  <input type="color" value={fillColor} onChange={(e) => this.setState({fillColor: e.target.value})} />
                </span> : ''}
            </div> : ''}
        </div>
        <Button variant="raised" size="small" onClick={(e) => this.setState({color: '#FFA500' })}
                                      style={{background: '#FFA500'}} > </Button>
        <div> {mainColors.map(function(colorToUse, ) { 
                       return <Button key={colorToUse} variant="raised" size="small" onClick={(e) => this.setState({color: colorToUse})}
                                      style={{background: colorToUse}} > </Button>
                   }, this)}
        </div>

      </div>
    );
  }
}