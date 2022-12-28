const {digilabs_emails} = require('../models')
const {digilabs_header_section} = require('../models')


exports.getAllEmails = (req, res) => {
    digilabs_emails.findAll()
      .then((emails) =>
      {
         res.send(emails)
      })
      .catch((err) =>
      {
         console.log(err)
      })
}

exports.addEmail = (req, res) => {
    console.log(req.body)

    digilabs_emails.create({
        emails: req.body.email
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=> {
        res.send(err)
    })
}


