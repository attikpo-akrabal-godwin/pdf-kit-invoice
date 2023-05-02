import PDFDocument from "pdfkit"
import fs from 'fs'
export const  usePdfInvoce = ()=>{

    function test(){
        const doc  = new PDFDocument;
        const readstream = fs.createWriteStream('test.pdf')
        

    }

    return{
        test
    }
}