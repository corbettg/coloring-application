import React from 'react'
import { Typography, GridList } from 'material-ui'
import { GridListTile } from 'material-ui/GridList';

const coloringImages = ['Arcade_Alex_Altenkirch.gif', 'artbook_Jordan_McFaul.gif', 'atrium_Jordan_McFaul.gif', 'atrium_Lauren_Arsena.gif', 'bakery_Kinza_Kirkman.gif',
                          'circulationdesk_Anner_Rosquete.gif', 'fishtank_Kinza_Kirkman.gif', 'interior_Mackenzie_Capps.gif', 'kamon_Reni_Faust.gif',
                          'makerspace_Reni_Faust.gif', 'maskedfigure_Kaylyn_Emory.gif', 'newbooks_Mackenzie_Capps.gif', 'newbooks_Soledad_Rodriguez.gif',
                          'outdoors_Mallory_Williford.gif', 'pelicangallery_Haley_Moccia.gif', 'pelicangallery_Lauren_Arsena.gif', 'researchdesk_Devan_Corcoran.gif',
                          'seahawkbench_Haley_Moccia.gif', 'stacks_John_Resar.gif', 'Sundial_Alex_Altenkirch.gif', 'tac_Kaylyn_Emory.gif', 'translation_Reni_Faust.gif',
                          'treadmill_Devan_Corcoran.gif', 'whiteboards_Mallory_Williford.gif', 'workcubicles_Soledad_Rodriguez.gif'];
export default ({ updateBackgroundImage }) =>

<div style={{minHeight:800, marginTop:25}}>
  <GridList cellHeight={160} cols={2} style={{maxHeight: 800,}}>
    {coloringImages.map(image => (
      <GridListTile key={image} cols={.9} style={{border:'5px solid #006666', margin:5}}>
        <img src={`/images/${image}`} onClick={(e) => updateBackgroundImage(image)} />
      </GridListTile>
    ))}
  </GridList>
</div>
