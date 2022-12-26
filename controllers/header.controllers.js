const {digilabs_emails} = require('../models')
const {digilabs_header_section} = require('../models')




exports.getHeaderDetails = (req, res) => {
    digilabs_header_section.findAll()
    .then((header_details) =>
    {
       res.send(header_details)
    })
    .catch((err) =>
    {
       console.log(err)
    })
}

exports.updateHeaderTitle = (req, res) => {
    digilabs_header_section.update(
        {heading: req.body.heading},
        { where: {id : 1}}
    )
    .then((header_title) =>
    {
      if (header_title)
      {
         res.send({
            message: "Header set successgully"
         });
      } else
      {
         res.send({
            message: `Vould not set heading`
         });
      }
   })
    
    .catch((err) =>
    {
       console.log(err)
    })
}

exports.updateHeaderImage = (req, res) => {
   console.log(req.body)
   digilabs_header_section.update(
      {public_id: req.body.public_id},
      { where: {id : 1}}
  )
  .then((data) =>
  {
    if (data)
    {
       res.send({
          message: "Public id set successgully"
       });
    } else
    {
       res.send({
          message: `Could not set heading`
       });
    }
 })
  
  .catch((err) =>
  {
     console.log(err)
  })
}

