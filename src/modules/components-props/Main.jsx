import React from 'react'
import Card from './components/Card'

export default function CardWrapper () {
  return (
    <>
      <h1>Components and props in react</h1>
      <p>Basic example of how we can create components, to make our app more modular, using props.</p>
      <Card username='midudev' initialFollowing>
        Midudev
      </Card>
      <Card username='reddit.com'>
        Reddit
      </Card>
    </>
  )
}
