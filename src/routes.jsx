import App from './App'
import Home from './pages/homepage/homepage'
import Rfps from './pages/rfps/rfps'
import Grants from './pages/grants/grants'
import Grant from './pages/grant/grant'
import Grantee from './pages/grantee/grantee'
import Expenses from './pages/expenses/expenses'
import Blog from './pages/blog/blog'
import Post from './pages/post/post'
import Brand from './pages/brand/brand'
import Apply from './pages/apply/apply'
import Faq from './pages/faq/faq'
import { grants, grantees, posts } from './shared/data'
import { NotFound } from './shared/ui/ui'

const find = (list, key) => ({ params }) => {
  const item = list.find((x) => x.id === params[key])
  if (!item) throw new Response('Not found', { status: 404 })
  return item
}
export const routes = [{
  path: '/', element: <App />, errorElement: <NotFound />,
  children: [
    { index: true, element: <Home /> },
    { path: 'rfps', element: <Rfps /> },
    { path: 'grants', element: <Grants /> },
    { path: 'grants/:id', element: <Grant />, loader: find(grants, 'id') },
    { path: 'grantee/:id', element: <Grantee />, loader: find(grantees, 'id') },
    { path: 'expenses', element: <Expenses /> },
    { path: 'blog', element: <Blog /> },
    { path: 'blog/:id', element: <Post />, loader: find(posts, 'id') },
    { path: 'brand', element: <Brand /> },
    { path: 'apply', element: <Apply /> },
    { path: 'faq', element: <Faq /> },
  ],
}]
