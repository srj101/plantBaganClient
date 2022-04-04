import React from 'react'
import { gql,useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import { Container,Row,Col} from 'react-bootstrap';
import { Spin } from 'antd';
import './videos.style.css'
const GET_VIDEO = gql`
query($getVideoId: String!) {
  getVideo(id: $getVideoId) {
    id
    videoUrl
    thumbnail
    tag
    title
  }
}
`;

const GET_VIDEOS = gql`
query {
  getVideos {
    id
    thumbnail
    title
    desc
  }
}
`;

function SingleVideo() {
    const {videoId} = useParams();
    const { loading, error, data } = useQuery(GET_VIDEO,{
        variables: {
            getVideoId: videoId
        }
    });

    const allVideos = useQuery(GET_VIDEOS);
    if(allVideos.loading) return (<Spin />);
    if(loading) return (<Spin />);
    
    if(error) return (<p>{error.message}</p>)
    if(allVideos.error) return (<p>{allVideos.error.message}</p>)
  return (
    <div className='single-video-page'>
       <Container>
           <Row>
                <Col>
                    <div className="the_video">
                        <iframe src={data?.getVideo?.videoUrl}
                                frameborder='0'
                                width="100%"
                                height="480px"
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title={data?.getVideo?.title}
                        />
                    </div>
                </Col>
           </Row>
           <Row>
                <Col>
                    { allVideos?.data?.getVideos.map(video=> (
                        <div className="single_video_item">
                            <div className="video_image">
                                <img src={video.thumbnail} alt="" />
                            </div>
                            <div className="video_content">
                                <h3>{video.title}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id voluptatem est eos possimus vero.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, accusantium!</p>
                            </div>
                        </div>
                    )) }
                    
                </Col>
           </Row>
       </Container>
    </div>
  )
}

export default SingleVideo