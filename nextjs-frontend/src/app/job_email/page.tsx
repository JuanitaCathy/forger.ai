'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEdit, faStar } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

export default function UrlEmailPage() {
  const [url, setUrl] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [recipientEmail, setRecipientEmail] = useState<string>(''); // Recipient's email state
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false); // Email sent status
  const [premiumFeature, setPremiumFeature] = useState(false); // Premium feature toggle

  // Handle URL submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setEmailSent(false);

    try {
      const res = await fetch('/api/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }), // Sends the URL to Next.js API route
      });

      if (!res.ok) {
        throw new Error('Error generating email');
      }

      const data = await res.json();
      setEmail(data.email);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Send Email
  const handleSendEmail = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipientEmail, email }), // Sends recipient's email and generated email
      });

      if (!res.ok) {
        throw new Error('Error sending email');
      }

      setEmailSent(true); // Set email sent status
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle CSV file upload
  const handleCsvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCsvFile(file);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/upload-portfolio', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          throw new Error('Error uploading CSV');
        }

        const data = await res.json();
        alert(data.message);
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  // Handle copy action
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  // Handle edit action (for now, this could be a placeholder)
  const handleEditEmail = () => {
    alert('Edit feature coming soon!'); // Placeholder for edit functionality
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl px-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Generate <span className='text-pink-600'>Cold Email</span> for your next client here!✨
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="url"
            placeholder="Enter URL of a job post"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-pink-200 focus:outline-none"
            required
          />

          {/* Input for recipient's email */}
          <input
            type="email"
            placeholder="Enter Recipient's Email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-pink-200 focus:outline-none"
            required
          />

          {/* Upload Portfolio CSV section moved below Recipient's email */}
          <div className="w-full">
            <label className="block text-sm font-medium text-white mb-2">Upload Portfolio CSV (Optional):</label>
            <input
              type="file"
              accept=".csv"
              onChange={handleCsvUpload}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
            {csvFile && <p className="text-sm text-gray-100 mt-2">CSV Uploaded: {csvFile.name}</p>}
          </div>
          <button
                className="flex items-center text-pink-600 font-semibold"
                title="Upload Bulk Recruiter Data"
              >
                <FontAwesomeIcon icon={faStar} className="h-5 w-5 mr-1" />
                Premium Feature
          </button>
         
                    <div className="w-full">
                    <label className="block text-sm font-medium text-white mb-2">Upload Bulk Recruiter Mails:</label>
                    <input
                      type="file"
                      accept=".csv"
                      onChange={handleCsvUpload}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    {csvFile && <p className="text-sm text-gray-100 mt-2">CSV Uploaded: {csvFile.name}</p>}
                  </div>
        

          <button
            type="submit"
            className={`w-full py-3 px-4 bg-white text-pink-600 font-semibold rounded-md
            ${loading ? 'cursor-not-allowed opacity-70' : 'hover:bg-gray-100 transition-colors'}`}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Email'}
          </button>
        </form>

        {error && <p className="text-red-100 mt-4 text-center">{error}</p>}
        {emailSent && <p className="text-green-500 mt-4 text-center">Email sent successfully!</p>}

        {email && (
          <div className="mt-8 p-6 bg-gray-100 text-gray-800 rounded-md shadow-inner">
            <p className="whitespace-pre-wrap">{email}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors"
                  title="Copy Email"
                >
                  <FontAwesomeIcon icon={faCopy} className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={handleEditEmail}
                  className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors"
                  title="Edit Email"
                >
                  <FontAwesomeIcon icon={faEdit} className="h-5 w-5 text-gray-600" />
                </button>
              </div>
       
              <button
                className="flex items-center text-pink-600 font-semibold"
                title="Upload Bulk Recruiter Data"
              >
                <FontAwesomeIcon icon={faStar} className="h-5 w-5 mr-1" />
                Premium Feature
             </button>
            </div>

            {/* Send Email button disabled until email is generated */}
            <button
              type="button"
              onClick={handleSendEmail}
              className={`w-full py-3 px-4 bg-pink-600 text-white font-semibold rounded-md
              ${loading || !email ? 'cursor-not-allowed opacity-70' : 'hover:bg-pink-500 transition-colors'}`}
              disabled={loading || !email}
            >
              {loading ? 'Sending...' : 'Send Email'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
