import Topbar from '../../componnents/Topbar/Topbar'
import './Blogs.css'
import  new_article from './../../images/add-circle.svg'
import CardArticle from '../../componnents/CardArticle/CardArticle'
import  article_photo1 from './../../images/Rectangle 23.png'
import  article_photo2 from './../../images/Rectangle 11.png'
import { Link } from 'react-router-dom'



const Blogs = () => {
  return (
    <div className='HJ_container' >
        <Topbar title="Blog"/>
        <button className='HJ_btn'>
          <Link to='/new'>
            <img src={new_article} alt="new article"/> 
          </Link>
          New Article
        </button>
        <CardArticle image = {article_photo1} />
        <CardArticle image = {article_photo2} />
        
        
      

    </div>
  )
}

export default Blogs