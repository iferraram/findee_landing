const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: '7ce29f001@smtp-brevo.com',
    pass: 'hrMEGFD7BT083vC1',
  },
})
app.post('/api/send', (req, res) => {
  const mailOptions = {
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.message,
  }
  transporter.sendMail(mailOptions, (error, info) => {
    try {
      if (error) {
        console.log('Email sent info:', error)
        return res.status(500).send(error)
      }
      console.log('Email sent info:', info)

      res.status(200).send('Email sent successfully')
    } catch (e) {
      console.error(e)
    }
  })
})
// Fallback for React frontend (handles routes other than API)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = 3030
app.listen(port, () => console.log(`Server running on port ${port}`))
