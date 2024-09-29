// src/app/api/upload-portfolio.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData = new FormData();
    formData.append('file', req.body.file); // This may need to be adjusted based on how you send the CSV file.

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload-portfolio`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        return res.status(response.status).json({ error: data.message });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Error uploading portfolio' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
