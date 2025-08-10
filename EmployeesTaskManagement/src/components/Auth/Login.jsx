import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Email is ', email)
    console.log('Password is ', password)
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="bg-gray-800/80 backdrop-blur-lg border border-emerald-500/30 rounded-2xl shadow-2xl p-10 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-emerald-400 text-center mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Log in to continue to your dashboard
        </p>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center gap-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full outline-none bg-gray-900/60 text-gray-200 border border-gray-700 focus:border-emerald-400 placeholder-gray-500 text-lg py-3 px-5 rounded-full transition-all duration-300"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full outline-none bg-gray-900/60 text-gray-200 border border-gray-700 focus:border-emerald-400 placeholder-gray-500 text-lg py-3 px-5 rounded-full transition-all duration-300"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="mt-4 cursor-pointer text-white font-semibold bg-emerald-600 hover:bg-emerald-500 text-lg py-3 px-8 w-full rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
