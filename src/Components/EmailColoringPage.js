import React from 'react'
import { Button } from 'material-ui'
import html2canvas from '../../node_modules/html2canvas'

 const emailColoringPage = () => {
  html2canvas(document.querySelector("#ColorPageDiv")).then(canvas => {
      document.body.appendChild(canvas)
      console.log(canvas)

      var a = document.createElement('a')
      var linkText = document.createTextNode("my title text")
      a.appendChild(linkText)
      a.title = "my title text"
      a.href = canvas.toDataURL("image/png")
      document.body.appendChild(a)
  });
}

export default props =>

<div style={{minHeight:800, marginTop:25}}>
  <Button variant="raised" size="large" color="primary" onClick={(e) => emailColoringPage()} > Capture Screenshot </Button>
</div>
