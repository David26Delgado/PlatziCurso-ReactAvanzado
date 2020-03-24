import React from 'react'

// Components
import { FavButton } from '../FavButton'

// Containers
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

// Styled Components
import { Article, Img, ImgWrapper } from './styles'

// Custom Hooks
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

// Constants
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {show &&
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                  setLiked(!liked)
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </>}
    </Article>
  )
}
