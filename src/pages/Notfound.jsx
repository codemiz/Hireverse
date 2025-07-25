import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-mono text-blue-500">404</h1>
      <p className="text-xl font-thin mt-3">Page Not Found</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  )
}

export default Notfound
