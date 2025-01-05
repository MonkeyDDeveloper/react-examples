import React from 'react'
import useGlobalCounter from './hooks/useGlobalCounter'

export default function CounterExample () {
  const { count, add, substract } = useGlobalCounter()

  return (
    <section>
      <h1>Counter Example with Redux-toolkit: {count}</h1>
      <p>Basic example of the usage of global state in a react app using redux-toolkit</p>
      <button onClick={add}>Increment</button>
      <button onClick={substract}>Decrement</button>
    </section>
  )
}
