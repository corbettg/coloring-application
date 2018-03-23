import React, { Component } from 'react'
import { AppBar, Grid, Tabs, Typography } from 'material-ui'
import { Tab } from 'material-ui/Tabs';
import { CanvasSettings, CanvasImages } from '../Components'
import { SketchPad, TOOL_PENCIL, TOOL_LINE, TOOL_RECTANGLE, TOOL_ELLIPSE } from '../../node_modules/react-sketchpad/lib'
import { Button } from 'material-ui'

export default class Body extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      tool:TOOL_PENCIL,
      size: 5,
      color: '#000000',
      fill: false,
      fillColor: '#000000',
      items: [],
      currentTab: 0,
      editFillColor: 0,
    }
    this.updateTool = this.updateTool.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateColor = this.updateColor.bind(this)
    this.updateFill = this.updateFill.bind(this)
    this.updateFillColor = this.updateFillColor.bind(this)
    this.updateEditFillColor = this.updateEditFillColor.bind(this)
  }

  updateTool(value) { this.setState({tool:value}) }
  updateSize(value) { this.setState({size:value}) }
  updateColor(value) { this.setState({color:value}) }
  updateFill(value) { this.setState({fill:value}) }
  updateFillColor(value) { this.setState({fillColor:value}) }
  updateEditFillColor(value) { this.setState({editFillColor:value}) }

  changeCurrentTab = (event, currentTab) => {
    this.setState({ currentTab });
  };

  render() {
      const { tool, size, color, fill, fillColor, items, currentTab, editFillColor, updateEditFillColor } = this.state;

      return (
        <Grid container>
            <Grid item xs={9}>
                <div>
                    <hr/>
                    <div style={{float:'left', marginRight:20, border: '5px solid #006666',
                                 background:'url("/images/treadmill_Devan_Corcoran.gif")', backgroundSize:'cover'}}>
                        <SketchPad
                        width={1280} //prod: 1920
                        height={854}// prod 1080
                        animate={true}
                        size={size}
                        color={color}
                        fillColor={fill ? fillColor : ''}
                        items={items}
                        tool={tool}
                        />
                    </div>
                    <div style={{float:'left', marginRight:20, border: '5px solid #006666', position:'absolute', zIndex:999, width:'1280px', height:'854px', pointerEvents:'none',
                                 background:'url("/images/treadmill_Devan_Corcoran.gif")', backgroundSize:'cover'}}></div>
                </div>
            </Grid>
            <Grid item xs={3}>


                <div>
                    {currentTab === 0 && <CanvasSettings tool={tool} color={color} fill={fill} fillColor={fillColor} editFillColor={editFillColor}
                                            updateTool={this.updateTool}
                                            updateSize={this.updateSize}
                                            updateColor={this.updateColor}
                                            updateFill={this.updateFill}
                                            updateFillColor={this.updateFillColor}
                                            updateEditFillColor={this.updateEditFillColor} />}
                    {currentTab === 1 && <CanvasImages />}
                    {currentTab === 2 && <Typography style={{minHeight:800}}>Other Settings</Typography>}
                    <AppBar position="static" color="default">
                    <Tabs
                        value={currentTab}
                        onChange={this.changeCurrentTab}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                    >
                        <Tab label="Size & Color" />
                        <Tab label="Image Selection" />
                        <Tab label="Other Settings" />
                    </Tabs>
                    </AppBar>
                </div>
            </Grid>
        </Grid>
      )
  }
}
