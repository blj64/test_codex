import { useState } from 'react';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(() => localStorage.getItem('cookies') === '1');
  if (accepted) return null;
  const accept = () => {
    localStorage.setItem('cookies', '1');
    setAccepted(true);
  };
  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p>Ce site utilise des cookies.</p>
      <button type="button" onClick={accept} className="bg-blue-600 px-2 py-1 rounded">
        OK
      </button>
    </div>
  );
}
