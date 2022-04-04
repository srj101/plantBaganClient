import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import "./carousel.css"
export function BoCarousel() {
  return (
      <div className='carousel-container'>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>Top 10 Environmental Benefits of Tree Planting</h3>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet. Lorem ipsum, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Quos, officia!</p>
                    <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quidem voluptatem dicta, possimus quia itaque!  elit. Quas dolores laboriosam ducimus itaque porro expedita! dolor sit amet, consectetur adipisicing elit. Ut, praesentium?</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="https://i.ibb.co/VwT7DgK/stock-photo-229744005.webp" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>বর্ষার শুরুতেই গড়ে তুলুন শখের বাগান</h3>
                    <p>প্রকৃতিতে এখন বর্ষাকাল। গাছ লাগানোর উপযুক্ত সময়। বলা হয়ে থাকে—জুন, জুলাই ও আগস্টে রোপণ করা শতভাগ গাছ বাঁচানো সম্ভব।</p>
                    <p>ফলে যারা বাড়ির আঙিনা বা ছাদে শখের বসে ছোট্ট বাগান গড়ে ‍তুলতে চান, তাদের এখনই কাজে লেগে পড়া উচিত।</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="https://www.nationalforests.org/assets/header-images/_2000x2000_fit_center-center_none/16622/DSC_1472.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>বাড়িতে গাছপালা থাকলে চারপাশের বায়ু পরিষ্কারে সহায়তা করে</h3>
                    <p>আমরা জানি, গাছ বাতাসে কার্বন ডাই অক্সাইড হ্রাস করে এবং এটি অক্সিজেন ত্যাগ করে। তারই সাথে গাছপালা ধূলিকণা সংগ্রহ করে এবং বায়ুমণ্ডলে ক্ষতিকারক পদার্থগুলিও ভেঙে দেয়।</p>
                    <p>স্বাস্থ্যকর আর্দ্রতা বাড়ির বাতাসের গুণমানকেও উন্নত করে। এপিপ্রিমেনাম এবং স্পাথিফিলিয়ামের মতো ধরণের গাছপালা বায়ু-বিশোধক উদ্ভিদ।</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="https://www.nationalforests.org/assets/header-images/_2000x2000_fit_center-center_none/Beaverhead-Deerlodge-NF_Pyramid-Point_USFS-Leona-Rodreick.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
      </Carousel>
      </div>

  )
}

export default BoCarousel;