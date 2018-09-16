import axios from 'axios'

export default {
  getSiteData: () => ({
    siteTitle: 'Dynamix',
    metaDescription: 'A site for dynamically comparing fruit products'
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {  path: '/lemons',
        component: 'src/containers/Lemons',
        },
      {  path: '/oranges',
        component: 'src/containers/Oranges',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: class CustomDocument extends Component {
    render () {
      const {
        Html, Head , Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charset="UTF-8" />
          </Head>
          <Body>
            <script>
              API = {
                fetchInfo() {
                  return new Promise((res,rej) => {
                    const info = [
                      {
                        dynamic: 'oranges'
                      }
                      {
                        dynamic: 'Lemons'
                      }
                    ]
                  })
                }
              }
            </script>
          </Body>
        </Html>
      )
    }
  }
}
