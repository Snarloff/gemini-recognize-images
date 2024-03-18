'use client'

import Image from 'next/image'

import { recognizeImageByUrl } from '@/app/(home)/actions'
import { useRef, useState } from 'react'

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)

  const [imageBase64, setImageBase64] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleRecognizeImage = async () => {
    const url = inputRef.current?.value

    if (!url) return

    setLoading(true)
    setImageBase64(null)
    setResult(null)

    const { image, result } = await recognizeImageByUrl(url)

    setImageBase64(image)
    setResult(result)
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <Image src="/gemini.png" alt="" width={180} height={180} />

      <div className="flex size-full items-center justify-center gap-2">
        <input
          ref={inputRef}
          type="url"
          placeholder="Cole o link de alguma imagem que queira descrevê-la..."
          className="focus:ring-opacity/50 h-12 w-1/2 rounded-lg p-4 outline-none transition-shadow duration-300 hover:shadow-lg focus:shadow-lg"
        />

        <button
          onClick={handleRecognizeImage}
          className="cursor-pointer rounded-full bg-slate-400 p-3 text-white transition-colors duration-300 hover:bg-slate-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </div>

      {loading && (
        <div className="mt-4 flex items-center justify-center gap-2 transition-all duration-300">
          <div className="size-6 animate-ping rounded-full border-2 bg-slate-400" />
        </div>
      )}

      {imageBase64 && (
        <div className="flex max-w-lg flex-col gap-4 rounded-lg p-4 shadow-lg transition-all duration-500">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${imageBase64}`} alt="Imagem" />

          <p className="text-slate-600">{result}</p>
        </div>
      )}
    </main>
  )
}
