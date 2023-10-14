import React from "react";
import './Blog.css';

const Blog=()=>{
return(
  
   

    

    <section className="blog-content">
        <div className="row">
            <div className="blog-left">
                <img src="images/certificate.jpg"/>
                <h2>Our blogs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quod accusamus corrupti 
                    aliquam saepe eos velit distinctio. Repudiandae hic, accusantium inventore aliquid eos
                    harum nobis expedita, vitae, delectus at dolorum?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla mollitia quibusdam veritatis 
                    consectetur voluptates illo cupiditate ea? Itaque illum adipisci dolore voluptas non velit, 
                    sequi eum explicabo? Cupiditate, adipisci hic! Lorem ipsum dolor sit amet consectetur, adipisicing 
                    elit. Ducimus tempora minus magni mollitia commodi aliquam obcaecati numquam in consequatur enim 
                    pariatur corporis sed voluptatum provident, nisi aspernatur. Recusandae, eligendi cumque.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit repudiandae consequuntur repellat
                    nisi voluptatum a eligendi corporis dignissimos explicabo temporibus autem ea aliquam, atque quasi
                    illum sunt deleniti in.</p>    
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit repudiandae consequuntur repellat
                    nisi voluptatum a eligendi corporis dignissimos explicabo temporibus autem ea aliquam, atque quasi
                    illum sunt deleniti in.</p>  
                
                    <div className="comment-box">
                        <h3>Leave a Comment</h3>
    
                        <form className="comment-form">
                            <input type="text" placeholder="Enter Name" required/>
                            <input type="email" placeholder="Enter Email" required/>
    
                            <textarea rows="5" placeholder="Your Comment" required></textarea>
    
                            <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
                        </form>
                    </div>
            </div>
            <div className="blog-right">
                <h3>Post Categories</h3>
                <div>
                    <span>Mental Health Tips and Strategies</span>
                    <span>21</span>
                </div>
                <div>
                    <span>Case Studies and Success Stories</span>
                    <span>28</span>
                </div>
                <div>
                    <span>Psychology Research and Insight</span>
                    <span>15</span>
                </div>
                <div>
                    <span>Self-Improvement and Personal Growth</span>
                    <span>34</span>
                </div>
                <div>
                    <span>Workplace Mental Health</span>
                    <span>42</span>
                </div>
                <div>
                    <span>Lorem Ipsum</span>
                    <span>22</span>
                </div>
                <div>
                    <span>Lorem Ipsum</span>
                    <span>30 </span>
                </div>
            </div>
        </div>
    </section>
    
);

}

export default Blog;