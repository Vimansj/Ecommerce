import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {HiOutlineArrowLeft} from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dynamic Blog Name"}></Meta>
    <BreadCrumb title="Dynamic Blog Name"/>

    <Container class1="blog-wrapper home-wrapper-2 py-5">
       
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to="/blogs" className='d-flex align-items-center gap-10'> 
                        <HiOutlineArrowLeft className='fs-5'/>Go back to Blog
                        </Link>
                        <h3 className="title">
                            A Beautiful Sunday Morning Renaissance
                        </h3>
                        <img src={blog} className='img-fluid w-100 my-4' alt="blog" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, vel perspiciatis. Sequi nobis odit, nulla tempore aliquam numquam ducimus totam dolore odio impedit alias sunt doloremque pariatur maiores nostrum? Eius deserunt quos autem hic natus voluptatibus sapiente, laboriosam voluptas officiis minus sunt exercitationem placeat dolorem iure similique ipsum. Quae et quod placeat delectus cupiditate ad libero! Quia, reiciendis officiis et architecto maiores cum id incidunt quaerat nesciunt reprehenderit ut asperiores.</p>
                    </div>
                </div>
            </div>
        
    </Container>
    </>
  )
}

export default SingleBlog
