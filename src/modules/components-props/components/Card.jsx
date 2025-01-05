import '../css/Card.css'
import React, { useState } from 'react'

export default function Card ({ children, name, username, initialFollowing = false }) {
  const avatarUri = `https://unavatar.io/${username}`
  const [following, setFollowing] = useState(initialFollowing)

  const buttonClasses = following
    ? 'user-card-actions-button user-card-actions-button-following'
    : 'user-card-actions-button'

  const handleClick = () => {
    setFollowing(!following)
  }

  return (
    <article className='user-card'>
      <header className='user-card-header'>
        <img className='user-card-header-img' src={avatarUri} alt={`Avatar de ${name}`} />
        <section className='user-card-header-info'>
          <p>{children}</p>
          <small>@{username}</small>
        </section>
      </header>
      <section className='user-card-actions'>
        <button className={buttonClasses} onClick={handleClick}>
          <span className='user-card-actions-button-text'>
            {following ? 'Following' : 'Follow'}
          </span>
          <span className='user-card-actions-button-text-stop-following'>
            Unfollow
          </span>
        </button>
      </section>
    </article>
  )
}
