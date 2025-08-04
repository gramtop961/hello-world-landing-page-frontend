export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">
          Hello World! 👋
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to our amazing landing page. This is where great things begin.
        </p>
        <div className="space-y-4">
          <p className="text-lg text-gray-500">
            Ready to explore what we have to offer?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </main>
  )
}
