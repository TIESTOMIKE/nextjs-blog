import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layouts/layout';
import Head from "next/head"; 
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>
            {postData.title}
          </title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    console.log('getStaticProps', 'getPostData', postData)
    return {
        props: {
        postData
        }
    }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  console.log('getStaticPaths', 'getAllPostIds', paths)
  return {
    paths,
    fallback: false
  }
}