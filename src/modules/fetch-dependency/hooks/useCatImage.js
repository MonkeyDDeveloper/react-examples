import { useEffect, useState } from 'react'

function getUriForImageWithRandomText (text) {
  return `https://cataas.com/cat/says/${text}`
}

export default function useCatImage ({ fact }) {
  const [imageUri, setImageUri] = useState('')

  useEffect(() => {
    if (fact.length === 0) {
      return undefined
    }

    const firtsWord = fact.split(' ')[0]
    const uri = getUriForImageWithRandomText(firtsWord)
    setImageUri(uri)
  }, [fact])

  return {
    imageUri
  }
}
