import axios from 'axios'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Label from 'components/Label'
import Card from 'components/Card'
import Member from 'components/Member'
import styles from 'styles/index.scss'
import Portfolio from 'components/Portfolio'
import { Artwork, Award, User } from 'interfaces'
import { server } from 'config';
import 'styles/global.scss'

type Props = {
  secondMember: User[]
  thirdMember: User[]
  firstAward: Award[]
  secondAward: Award[]
  portfolio: Artwork[]
}

const IndexPage = ({ secondMember, thirdMember, firstAward, secondAward, portfolio }: Props) => (
  <Layout>
    <Section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <div className={styles.home}>
        <div>
          <h1>
            안녕하세요,<br/>
            브이프렌즈입니다!
          </h1>
          <p>
            저희는 UI/UX를 기본으로 영상, 그래픽,<br/>
            3D 등 다양한 분야에 대해 배우는 학습 커리큘럼을<br/>
            구성하고 있어요. 많은 관심 부탁드려요!
          </p>
        </div>
        <img src="/static/main-illust.svg" alt=""/>
      </div>
    </Section>
    <Section id="intro">
      <div className={styles.member}>
        <h1>부원들은 누가 있을까요?</h1>
        <div>
          <div>
            <Label text="2학년" />
            <Card className={styles.card}>
              {secondMember.map((item, index) => <Member {...item} key={index}/>)}
            </Card>
          </div>
          <div>
            <Label text="3학년" />
            <Card className={styles.card}>
              {thirdMember.map((item, index) => <Member {...item} key={index}/>)}
            </Card>
          </div>
        </div>
      </div>
    </Section>
    <Section id="award">
      <div className={styles.award}>
        <h1>2년 동안의 수상 실적이에요</h1>
        <div>
          <Label text="교내 대회 - 30개"/>
          <Label text="외부 대회 - 14개"/>
        </div>
        <Card className={styles.awardCard}>
          <h2>2019</h2>
          {firstAward.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <span>{item.name}</span>
            </div>
          ))}
          <h2 style={{ marginTop: 44 }}>2020</h2>
          {secondAward.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <span>{item.name}</span>
            </div>
          ))}
        </Card>
      </div>
    </Section>
    <Section id="portfolio">
      <div className={styles.portfolio}>
        <h1>부원들의 포트폴리오에요!</h1>
        <div>
          {portfolio.map((item, index) => <Portfolio {...item} index={index} key={index}/>)}
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage

export async function getServerSideProps() {
  const secondMember = await axios.get(`${server}/api/member/2`)
  const thirdMember = await axios.get(`${server}/api/member/3`)
  const firstAward = await axios.get(`${server}/api/award/2019`)
  const secondAward = await axios.get(`${server}/api/award/2020`)
  const portfolio = await axios.get(`${server}/api/portfolio`)

  return { props: {
    secondMember: secondMember.data,
    thirdMember: thirdMember.data,
    firstAward: firstAward.data,
    secondAward: secondAward.data,
    portfolio: portfolio.data
  }}
}
