import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-right">
            אודי פינטו - ביטוח ופיננסים
          </h1>
          <p className="text-gray-600 text-right">ייעוץ וניהול ביטוח מקצועי</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-right mb-4">צור קשר</h2>
          <div className="text-right">
            <p>טלפון: 050-3353076</p>
            <p>אימייל: pintoudi@gmail.com</p>
            <p>כתובת: יגאל אלון 123, תל אביב</p>
          </div>
        </div>
      </main>
    </div>
  );
}
