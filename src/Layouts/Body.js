import React, { Component } from 'react'
import { AppBar, Grid, Tabs, Typography } from 'material-ui'
import { Tab } from 'material-ui/Tabs';
import { SettingsSidebar } from '../Components'
import { SketchPad, TOOL_PENCIL, TOOL_LINE, TOOL_RECTANGLE, TOOL_ELLIPSE } from '../../node_modules/react-sketchpad/lib'
import { Button } from 'material-ui'

export default class Body extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      tool:TOOL_PENCIL,
      size: 2,
      color: '#000000',
      fill: false,
      fillColor: '#444444',
      items: [],
      currentTab: 0,
    }
    this.updateTool = this.updateTool.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateColor = this.updateColor.bind(this)
  }

  updateTool(value) {
    this.setState({tool:value})
  }

  updateSize(value) {
    this.setState({size:value})
  }

  updateColor(value) {
    this.setState({color:value})
  }

  changeCurrentTab = (event, currentTab) => {
    this.setState({ currentTab });
  };

  render() {
      const { tool, size, color, fill, fillColor, items, currentTab } = this.state;

      return (
        <Grid container>
            <Grid item xs={9}>
                <div>
                    <hr/>
                    <div style={{float:'left', marginRight:20, border: '5px solid #006666',
                                 background:'url("/images/bakery_Kinza_Kirkman.gif")', backgroundSize:'cover'}}>
                        <SketchPad
                        width={1920}
                        height={1080}
                        animate={true}
                        size={size}
                        color={color}
                        fillColor={fill ? fillColor : ''}
                        items={items}
                        tool={tool}
                        />
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                

                <div>
                    {currentTab === 0 && <SettingsSidebar tool={tool}
                                            updateTool={this.updateTool}
                                            updateSize={this.updateSize} 
                                            updateColor={this.updateColor} />}
                    {currentTab === 1 && <Typography style={{minHeight:1050}}>Image Selection</Typography>}
                    {currentTab === 2 && <Typography style={{minHeight:1050}}>Other Settings</Typography>}
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