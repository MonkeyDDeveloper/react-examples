import useFact from './hooks/useFact'
import useCatImage from './hooks/useCatImage'

export default function App () {
  const { fact, updateFact } = useFact()
  const { imageUri } = useCatImage({ fact })

  return (
    <main>
      <h1>Fetch dependency</h1>
      <p>In this example we use two different useEffect hooks to keep the fact and the image updated.</p>
      <button onClick={updateFact}>
        Update Fact
      </button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUri && <img src={imageUri} alt={`Image of cat with the first letter of: ${fact}`} />}
      </section>
    </main>
  )
}
