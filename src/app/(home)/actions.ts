'use server'

import { genAI } from '@/lib/gemini'

function fileToGenerativePart(path: ArrayBuffer, mimeType: string) {
  return {
    inlineData: {
      data: Buffer.from(path).toString('base64'),
      mimeType,
    },
  }
}

export async function recognizeImageByUrl(url: string): Promise<{ image: string; result: string }> {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' })
  const prompt = 'Describe the image in a sentence. Answer in portuguese.'

  const image = await fetch(url, {
    mode: 'no-cors',
  })

  const imageBuffer = await image.arrayBuffer()

  const imageParts = [fileToGenerativePart(imageBuffer, 'image/png')]
  const imageBase64 = Buffer.from(imageBuffer).toString('base64')

  const result = await model.generateContent([prompt, ...imageParts])
  const response = result.response
  const resultText = response.text()

  return { image: imageBase64, result: resultText }
}
