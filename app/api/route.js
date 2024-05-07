import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req, res) {

    console.log("Running..")
    const { name, email, message, activeOption } = await  req.json();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'viratbarath218@gmail.com', 
        pass: 'qzhdmpmsajxiqyvs',
      }
    });

    const mailOptions = {
      from: 'barathkumar.b2411@gmail.com',
      to: 'barathkumar.b2411@gmail.com', 
      subject: 'New Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Active Option: ${activeOption}
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return NextResponse.json({
        data: "Message Send Successfully"
    })
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({
        data: "Error Sending Message"
    })
    }
}
