import {useState} from 'react';
import Intro from '../components/Intro.js';
import Footer from "../components/Footer.js";
import Helmet from '../components/Helmet.js';
import "../style/Blog.css";


const Blog = () => {
    const [blogs] = useState([
        {id: 6, image: require('../img/blog/coder.jpg'), description: "Some quick example text to buildon the card and make up the bulk of the card's content", titre: 'Coder son site en HTML/CSS', info: 'Publié le 22 août 2022'},
        {id: 5, image: require('../img/blog/croissance.jpg'), description: "Some quick example text to buildon the card and make up the bulk of the card's content", titre: 'Vendre ses produits sur le web', info: 'Publié le 20 août 2022'},
        {id: 4, image: require('../img/blog/google.jpg'), description: "Some quick example text to buildon the card and make up the bulk of the card's content", titre: 'Se positionner sur Google', info: 'Publié le 1 août 2022'},
        {id: 3, image: require('../img/blog/screens.jpg'), description: "Some quick example text to buildon the card and make up the bulk of the card's content", titre: 'Coder en responsive design', info: 'Publié le 31 juillet 2022'},
        {id: 2, image: require('../img/blog/seo.jpg'), description: "Some quick example text to buildon the card and make up the bulk of the card's content", titre: 'Techniques de référencement', info: 'Publié le 30 juillet 2022'},
        {id: 1, image: require('../img/blog/technos.png'), description: "Some quick example text to buildon the card and make up the bulk of the card's content", titre: 'Apprendre à coder', info: 'Publié le 12 juillet 2022'}
    ]);

    const [introductions] = useState ([
        {titre: "BLOG", texte:"Retrouvez ici quelques articles sur le développement web", image:require ('../img/banner.jpg')}
    ])

    const maxId = blogs.reduce(
        (max, blog) => (blog.id > max ? blog.id : max),
        blogs[0].id
      );
    
    const prevId = maxId-1;
    const anteId = maxId-2;
    

    console.log(maxId, prevId, anteId);

    return (
        <div id="blogPage" class="container-fluid  gx-0">
            <Helmet
                title="Blog"
            />
            <div className="introductionBlog" class="mt-3">
                {introductions.map((introduction)=>(
                <Intro introInfo={introduction}/>
                ))}
            </div>
            
            <div  id="blogCard">
                <div class="row">
                    <div class="col cards">
                        
                            {blogs.map((blog)=>(
                
                                <div class ="card text-left border-light mb-3 mt-3"  key={blog.id}>
                                    <img src={blog.image} class="card-img-top"></img>
                                    <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">{blog.titre}</h5>
                                    <p class="card-text">{blog.description}</p>
                                    
                                    <div class="text-left">
                                        <a href="#"  class="btn btn-primary  mx-auto">Lire la suite</a>
                                    </div>
                                    </div>
                                    <div class="card-footer text-muted">{blog.info}</div>
                    
                                </div>
                            ))}  </div>
                        
                    </div>
                </div>
            
             
             <Footer />
 
        </div>

    )
}

export default Blog;


/*<Link to={`/blog/${maxId}`} className='text-blue-600 underline'>{maxId}</Link>*/

