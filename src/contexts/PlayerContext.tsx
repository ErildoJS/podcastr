import {createContext, ReactNode, useState} from 'react'

type Episode = {
  title: string;
  members: string;
  thumbnail: string; 
  duration: number;
  url: string;
}

type PlayerContextData = {
  episodeList: Episode[];//uma lista de episodios
  currentEpisodeIndex: number;//indice da posicao do episodio actual tocando
  isPlaying: boolean;
  playing: (episode: Episode) => void;
  playList: (list: Episode[], index: number) => void
  setPlayingState: (state: boolean) => void
  tooglePlaying: () => void
  playNext: () => void
  playPrevious: () => void
}
export const PlayerContext = createContext({} as PlayerContextData)


type PlayerContextProviderProps = {
  children: ReactNode
}


export function PlayerContextProvider({children}: PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)  


  function playing(episode: Episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }//nome original é play()

  function playList(list: Episode[], index: number) {
    setEpisodeList(list)
    setCurrentEpisodeIndex(index)
    setIsPlaying(true)
  }

  function tooglePlaying() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  function playNext() {

    const nextEpisodeIndex = currentEpisodeIndex + 1

    if(nextEpisodeIndex >= episodeList.length) {
      return
    }

    setCurrentEpisodeIndex(currentEpisodeIndex + 1)
  }

  function playPrevious() {
    if(currentEpisodeIndex > 0) {

      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }


  return (
    <PlayerContext.Provider value={{episodeList, currentEpisodeIndex, playing, playList, playNext, playPrevious,isPlaying, tooglePlaying, setPlayingState}}>
      {children}
    </PlayerContext.Provider>
  )
}