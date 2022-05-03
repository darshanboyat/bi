import { sendMail } from '../../utils/mailer';
import { thankYouForApplyingForJob, applyForJobToHr } from '../../utils/templates';
import upload from 'express-fileupload';
import nextConnect from 'next-connect';
import multer from 'multer';
import formidable from 'formidable'

async function handleApplyForJobRequest(data) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            const payload = {
                to: data.email,
                subject: 'Applied for an Opportunity',
                html: thankYouForApplyingForJob(data)
            };
            await sendMail(payload);
    
            const payload2 = {
                to: 'p.garg@braininventory.com', //HR team email - Static
                subject: 'New Applicant',
                html: applyForJobToHr(data)
            }
            
            await sendMail(payload2);

            resolve(true)
        } catch (error) {
            reject({
                error: error?.message || 'Email not sent!'
            });
        }
    })
}


const apiRoute = nextConnect();
apiRoute.use(multer().any());

apiRoute.post((req, res) => {
    console.log(req.files, req.body)
    res.end('send')
})

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         upload();
//         handleApplyForJobRequest(JSON.parse(req.body)).then((resp) => {
//             if (resp) {
//                 res.status(200).json({ success: true })
//             }
//         })
//         .catch((error) => {
//             res.status(500).json({error: error})
//         });
//     }
// }



export const config = {
    api: {
      bodyParser: false,
    },
  }

  function streamToString (stream) {
    const chunks = [];
    return new Promise((resolve, reject) => {
      stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on('error', (err) => reject(err));
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    })
  }
  
  
  async function carrer (req) {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
          console.log(fields, files);
          console.log(files.doc);
          const result = await streamToString(files.doc.writeStream)
        console.log(result);
    });
  };

export default carrer;