import format from 'date-fns/format'
import ptAo from 'date-fns/locale/pt'
import styles from './styles.module.scss'


export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d, MMMM', {
    locale: ptAo
  })

  /**useEffect() = spa nao funciona com o SEO 
   * pk como a requisicao demora , os craulers nao esperam a 
   * requisicao terminar pra actuar no site
   */

  /**
   * SSR - 
   * so preciso exportar uma funcao export default getServerSideProps() {
   * }
   * 
   * ou seja vai executar essa funcao antes do conteudo carregar
   */
  return (
    <header className={styles.headerContainer}>

      <img src="/logo.svg" alt="Podcastr"/>

      <p>O melhor para voce ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  )
}