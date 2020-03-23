import React, { useEffect, useRef, useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
// Styled Components
import { Article, Button, Img, ImgWrapper } from './styles'

// Constants
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      return window.localStorage.getItem(key)
    } catch (error) {
      return false
    }
  })

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    )
      .then(() => {
        const observer = new window.IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0]

          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Article ref={element}>
      {show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>}
    </Article>
  )
}
