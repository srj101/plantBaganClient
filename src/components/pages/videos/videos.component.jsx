import React from 'react'
import './videos.style.css'
import { gql,useQuery } from '@apollo/client'
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GET_VIDEOS = gql`
query {
  getVideos {
    id
    thumbnail
    title
  }
}
`;

function Videos() {
    const { loading, error, data } = useQuery(GET_VIDEOS);
    if(loading) return "loading...";
    if(error) return (<p>{error.message}</p>)
    return (
        <div className='video_page'>
            <Container>
                <Row>
                    {data?.getVideos?.map(video => (
                        <Col key={video.id} md={4}>
                            <div className="single-video">
                                <Link to={`/videos/${video.id}`}>
                                    <div className="video-thumbnail">
                                        <img src={video.thumbnail} alt="" />
                                    </div>
                                    <div className="video-content">
                                        <h4>{video.title}</h4>
                                    </div>
                                    <div className="videoPlayButton">
                                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                <span className="seeMore"><Link  to={`/videos/`}>See More Videos</Link></span> 
                </Row>
            </Container>
        </div>
    )
}
export default Videos