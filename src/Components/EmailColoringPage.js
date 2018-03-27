import React from 'react'
import { Button, TextField } from 'material-ui'
import html2canvas from '../../node_modules/html2canvas'
import $ from "jquery"

const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
              'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
              '@', '.', 'UNCW.EDU', 'DEL', 'CLEAR']

const validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email);
}

const updateEmailTextarea = (letter) => {
    if (letter === 'DEL') {
        var email = $('#email').val()
        email = email.substring(0, email.length - 1)
        $('#email').val(email)
    } else if (letter === 'CLEAR') {
        $('#email').val('')
    } else {
        var email = $('#email').val() + letter
        $('#email').val(email)
    }
}

const emailColoringPage = () => {

  var emailField = $('#email').val()
  var sendEmail = validateEmail(emailField)

  sendEmail ?
    html2canvas(document.querySelector("#ColorPageDiv")).then(canvas => {

        const emailContent = {image: canvas.toDataURL("image/png"), email: emailField, emailHeader: 'Canvas test'}
         $.ajax({
           type: "POST",
           crossDomain: true,
           url: "https://coloring-book-api.libapps.uncw.edu",
           data: emailContent,
           success: function(result){
             console.log('success: ' + result)
         }})

         $('#email').val('')
    }) :
    null
}

export default props =>

<div style={{minHeight:800, marginTop:25}}>
  <TextField
          id="email"
          placeholder="example@email.com"
          margin="normal"
          multiline
          rows="3"
          style={{marginBottom:25, width:'80%'}}
        />
  <div> {keys.map(function(key) { return <Button key={key} variant="raised" size="medium"
                                                 onClick={() => updateEmailTextarea(key)}
                                              style={{background:'#006666', color:'#FFF', borderRadius:20, margin:5}} >{key}</Button>}, this) }
  </div>
  <Button variant="raised" size="large" style={{background:'#006666', color:'#FFF', borderRadius:20, marginTop:50, fontSize:25}}
          onClick={() => emailColoringPage()} >Send Email of Coloring</Button>
</div>
