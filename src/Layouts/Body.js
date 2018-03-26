import React, { Component } from 'react'
import { AppBar, Grid, Tabs, Typography, Button, Icon, Paper } from 'material-ui'
import { Tab } from 'material-ui/Tabs';
import { CanvasSettings, CanvasImages, EmailColoringPage } from '../Components'
import { SketchPad } from '../../node_modules/react-sketchpad/lib'

export default class Body extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      tool:'pencil',
      size: 5,
      color: '#000000',
      fill: false,
      fillColor: '#000000',
      items: [],
      currentTab: 2,
      editFillColor: 0,
      backgroundImage: 'treadmill_Devan_Corcoran.gif'
    }
    this.updateTool = this.updateTool.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateColor = this.updateColor.bind(this)
    this.updateFill = this.updateFill.bind(this)
    this.updateFillColor = this.updateFillColor.bind(this)
    this.updateEditFillColor = this.updateEditFillColor.bind(this)
    this.updateBackgroundImage = this.updateBackgroundImage.bind(this)
  }

  updateTool(value) { this.setState({tool:value}) }
  updateSize(value) { this.setState({size:value}) }
  updateColor(value) { this.setState({color:value}) }
  updateFill(value) { this.setState({fill:value}) }
  updateFillColor(value) { this.setState({fillColor:value}) }
  updateEditFillColor(value) { this.setState({editFillColor:value}) }
  updateBackgroundImage(value) { this.setState({backgroundImage:value}) }

  changeCurrentTab = (event, currentTab) => {
    this.setState({ currentTab });
  };

  render() {
      const { tool, size, color, fill, fillColor, items, currentTab, backgroundImage, editFillColor, updateEditFillColor, updateBackgroundImage } = this.state;

      return (
        <Grid container>
            <Grid item xs={9}>
                <div >
                    <div id="ColorPageDiv" style={{float:'left', marginRight:20, border: '3px solid #000', width:'1280px', height:'854px',
                                 background:`no-repeat center/100% url("/images/${backgroundImage}")`}}>
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
                    <div style={{float:'left', marginRight:20, border: '3px solid #000', position:'absolute', zIndex:999, width:'1280px', height:'854px', pointerEvents:'none',
                                 background:`no-repeat center/100% url("/images/${backgroundImage}")`}}></div>
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
                    {currentTab === 1 && <CanvasImages
                                            updateBackgroundImage={this.updateBackgroundImage} />}
                    {currentTab === 2 && <EmailColoringPage />}
                    <AppBar position="static" color="default" style={{width:'100%'}}>
                        <Tabs
                            value={currentTab}
                            onChange={this.changeCurrentTab}
                            indicatorColor="primary"
                            textColor="primary"
                            scrollable
                            scrollButtons="auto">
                            <Tab label={<Icon style={{fontSize:40, marginTop:-5 }}>settingsk</Icon>}  style={{width:'30%'}} />
                            <Tab label={<Icon style={{fontSize:40, marginTop:-5 }}>image</Icon>}  style={{width:'30%'}} />
                            <Tab label={<Icon style={{fontSize:50, marginTop:-5 }}>art_track</Icon>} style={{width:'30%'}} />
                        </Tabs>
                    </AppBar>
                </div>
            </Grid>
        </Grid>
      )
  }
}
