import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Container} from 'react-bootstrap';
import { gql,useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import LeftArrow from '../VideoCarousel/LeftArrow';
import RightArrow from '../VideoCarousel/RightArrow';
import "./CourseCarousel.css"
import { Spin } from 'antd';

const GET_COURSES = gql`
query getCourses{
  getCourses {
    id
    title
    sectionCount
    image
    lessonCount
    instructorName
    quizCount
    price
  }
}
`;

function CourseCarousel() {
  const { loading, error, data } = useQuery(GET_COURSES);
  if(loading) return (<Spin />);
  if(error) return (<p>{error.message}</p>)
  return (
    <div className='courseCarousel'>
        <Container className="caoursel-container">
            <Carousel swiping={true} leftArrow={<LeftArrow/>} rightArrow={<RightArrow/>} show={4}>
                    {
                      data?.getCourses?.map(course => (
                        <Link key={course.id} to={`/course/${course.id}`}><span><img src={course.image}/>
                        <div className="hover-content">
                            <span className="title">{course.title}</span>
                            <span>{ course.lessonCount} Lessons</span>
                            
                            <p className="price">Price: <span>${course.price}</span></p>
                        </div>
                        </span></Link>
                      ))
                    }
            </Carousel>
        </Container>
    </div>
  )
}

export default CourseCarousel