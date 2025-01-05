const FACT_URI = 'https://catfact.ninja/fact'

async function getRandomFact () {
  try {
    const response = await fetch(FACT_URI)
    const data = await response.json()
    if (!data.fact) {
      throw new Error('Error obteniendo el fact random')
    }
    return {
      success: true,
      data: data.fact
    }
  } catch (err) {
    console.error(err)
    return {
      success: false,
      errorMessage: 'Error obteniendo un fact aleatorio'
    }
  }
}

export {
  getRandomFact
}
