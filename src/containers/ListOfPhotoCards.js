// Hoc
import { withPhotos } from '../hoc/withPhotos'

// Components
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
