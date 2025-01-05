import { useState, useEffect, useCallback } from 'react'
import { getRandomFact } from '../services/fact'

export default function useFact () {
  const [fact, setFact] = useState('')

  const updateFact = useCallback(() => {
    getRandomFact()
      .then(response => {
        if (!response.success) {
          console.error(response.errorMessage)
          return
        }
        setFact(response.data)
      })
  })

  useEffect(updateFact, [])

  return {
    fact,
    updateFact
  }
}
