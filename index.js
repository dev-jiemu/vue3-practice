const sesAccessKey = ''
const sesSecretKey = ''

exports.handler = function(event, context, callback) {
    const sendTarget = 'rebianne03gmail.com'

    const nodemailer = require('nodemailer')
    const smtpTransport = require('nodemailer-smtp-transport')

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user:sesAccessKey,
            pass:sesSecretKey
        }
    }))

    const base64body = JSON.stringify(event.body)
    const body = JSON.parse(Buffer.from(base64body, 'base64').toString('utf8'))
    const data = {
        name: body.name,
        email: body.email,
        organization: body.organization,
        title: body.title,
        inquiry: body.inquiry
    }

    const mailOptions = {
        from: sesAccessKey,
        to: sendTarget,
        subject: data.title,
        html: `<p>Name: ${data.name}</p>
              <p>Email: ${data.email}</p>
              <p>Organization: ${data.organization}</p>
              <br/><br/>
              <p>------ Message ------</p>
              <p>${data.inquiry}</p>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    error: error.message,
                }),
            }

            callback(null, response);
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `Email sent successfully!`,
                data: event
            }),
        }

        callback(null, response)
    })
}