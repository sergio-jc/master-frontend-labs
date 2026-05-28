import MainLayout from '@/layouts/main.layout'
import { CharactersList } from '@/pods/rick-and-morty'

const RickAndMortyScene = () => {
  return (
    <MainLayout>
      <CharactersList />
    </MainLayout>
  )
}

export default RickAndMortyScene