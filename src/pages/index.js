import Chatbot from '../components/Chatbot'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Chatbot Demo
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Interactive chatbot built with Next.js and TailwindCSS
            </p>
          </div>
          <Chatbot />
        </div>
      </div>
    </div>
  )
}
