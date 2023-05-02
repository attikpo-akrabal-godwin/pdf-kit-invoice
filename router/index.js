import express from 'express'
import PDFDocument from "pdfkit"
import fs from 'fs'

const router = express.Router()

router.get('/',(req,res)=>{
    const doc  = new PDFDocument;
    doc.text(`${'top'}`, 100, 100)
    doc.pipe(fs.createWriteStream('test.pdf')); 
    doc.pipe(res); 
    doc.end();
})

export default router