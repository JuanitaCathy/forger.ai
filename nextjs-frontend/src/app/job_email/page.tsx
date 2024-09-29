'use client';

import { useState } from 'react';

export default function UrlEmailPage() {
  const [url, setUrl] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle URL submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl px-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Generate Cold Email</h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="url"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />

          <button
            type="submit"
            className={`w-full py-3 px-4 bg-white text-blue-500 font-semibold rounded-md
            ${loading ? 'cursor-not-allowed opacity-70' : 'hover:bg-gray-100 transition-colors'}`}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Email'}
          </button>

          <div className="w-full">
            <label className="block text-sm font-medium text-white mb-2">Upload Portfolio (CSV):</label>
            <input
              type="file"
              accept=".csv"
              onChange={handleCsvUpload}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
            {csvFile && <p className="text-sm text-gray-100 mt-2">CSV Uploaded: {csvFile.name}</p>}
          </div>
        </form>

        {error && <p className="text-red-100 mt-4 text-center">{error}</p>}

        {email && (
          <div className="mt-8 p-6 bg-gray-100 text-gray-800 rounded-md shadow-inner">
            <h2 className="text-lg font-bold mb-2">Generated Email:</h2>
            <p className="whitespace-pre-wrap">{email}</p>
          </div>
        )}
      </div>
    </div>
  );
}
