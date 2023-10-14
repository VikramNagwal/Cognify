import React from "react";
import './CoursePage.css'
const CoursesPage =()=>{
    return (
    

        <div className="course-all">

        <div>   

        <h1 className="course-h1">Courses</h1>
        <p className="course-p">Experience a transformative journey towards optimal mental well-being and unlock your
true potential with our carefully crafted courses. Designed to empower you daily, our
programmes are tailored to nurture your mental health, enabling you to flourish and
embrace a life of fulfilment. Embark on a path of personal growth, where you&#39;ll discover
the tools, support, and guidance needed to thrive and adopt your best life. Invest in
yourself and embark on this remarkable opportunity to cultivate lasting well-being and
unlock the extraordinary possibilities that await you.</p>
        </div>
         <div className="body-course">
         <div className="box-course">
             <div className="card-course">
                 <div className="imgBx">
                     <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                 </div>
                 <div className="details">
                     <h2>SomeOne Famous<br /><span>Director</span></h2>
                 </div>
             </div>

             <div className="card-course">
                 <div className="imgBx">
                     <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                 </div>
                 <div className="details">
                     <h2>SomeOne Famous<br /><span>Producer</span></h2>
                 </div>
             </div>

             <div className="card-course">
                 <div className="imgBx">
                     <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                 </div>
                 <div className="details">
                     <h2>SomeOne Famous<br /><span>Actor</span></h2>
                 </div>
        </div>
             </div>

         </div>
     </div>
    
    )
}
export default CoursesPage;