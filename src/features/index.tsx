import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Navigation from '../components/Navigation'
import HomePage from './home/HomePage'
import UserDetailPage from './node-sample/UserDetailPage'
import UsersPage from './node-sample/UsersPage'
import PlanetsPage from './star-wars/PlanetsPage'
import TodoPage from './todo/TodoPage'

export default () => (
  <BrowserRouter>
    <Navigation />
    <Menu />
    <section id='content'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/star-wars' element={<PlanetsPage />} />
        <Route path='/node-sample'>
          <Route path='' element={<UsersPage />} />
          <Route path='edit/:id' element={<UserDetailPage />} />
          <Route path='create' element={<UserDetailPage />} />
        </Route>
      </Routes>
    </section>
    <Footer />
  </BrowserRouter>
)
