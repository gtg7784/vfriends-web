import {GetServerSideProps} from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'
import Layout from 'components/Layout'
import Section from 'components/Section'
import { server } from 'config'
import { Artwork } from 'interfaces'
import styles from 'styles/detail.scss'
import 'styles/global.scss'

type Props = {
  data: Artwork
}

const ArtworkPage = ({ data }: Props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div className={styles.container}>
          <div>
            <h1>{data.title}</h1>
            <span>{data.type}</span>

            <p>{data.artist} 제작</p>
            <p>{data.description}</p>
          </div>
          <div>
            {data.image ? <div>
              {data.image.map((item, index) => (
                <img
                  src={`/portfolio/${id}/${item}.png`}
                  alt={data.title}
                  width={273}
                  height='auto'
                  key={index}
                />
              ))}
            </div> :
              <img
                src={`/portfolio/${id}.png`}
                alt={data.title}
                width={640}
                height='auto'
              />}
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default ArtworkPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {id} = ctx.query;
  const res = await axios.get(`${server}/api/portfolio/${id}`)

  return { props: {
    data: res.data
  }}
}
