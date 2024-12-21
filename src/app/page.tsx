import React from 'react'
import JoinRoom from "@/components/join-room"

const HomePage = () => {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="flex flex-col items-center justify-center h-full px-6 gap-12">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold !leading-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Welcome to ChatMe
          </h1>
          <p className="text-zinc-700 text-lg max-w-lg mx-auto mt-4">
            Now with improved video and voice calls for everyone
          </p>
        </div>
        <JoinRoom />
      </div>
    </main>
  )
}

export default HomePage
