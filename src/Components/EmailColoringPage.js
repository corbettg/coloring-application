import React from 'react'
import { Button } from 'material-ui'
import html2canvas from '../../node_modules/html2canvas'
import $ from "jquery"

 const emailColoringPage = (e) => {
  html2canvas(document.querySelector("#ColorPageDiv")).then(canvas => {

      const emailContent = {image: canvas.toDataURL("image/png"), email: 'corbettg@uncw.edu', emailHeader: 'Canvas test'}

      console.log(emailContent.image)

       $.ajax({
         type: "POST",
         crossDomain: true,
         url: "http://152.20.225.136:3000",
         data: emailContent,
         success: function(result){
           console.log('success: ' + result)
       }});


  });
}

export default props =>

<div style={{minHeight:800, marginTop:25}}>
  <Button variant="raised" size="large" color="primary" onClick={(e) => emailColoringPage(e)} > Capture Screenshot </Button>
</div>
