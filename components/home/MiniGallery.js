import React from 'react'
import {Carousel} from 'react-bootstrap';
import Image from 'next/image';
import styles from '/styles/Gallery.module.css'

export default function MiniGallery() {
  return (
    <Carousel variant="dark" className="w-100" style={{backgroundColor: "rgb(255, 236, 239)"}}>
      {[...Array(8)].map((x, i) =>
         {
            let dest = "/Gallery/i" + i*2 + ".jpeg";
            return  <Carousel.Item interval={2000}  key={i}>
                      <div className="d-flex justify-content-center p-5">
                        <Image
                            className={styles.imgRound}
                            src={dest}
                            alt="la vida crafts img"
                            width={500}
                            height={350}
                            objectFit="responsive"
                        />
                      </div>
                    </Carousel.Item>
         }
        )}
    </Carousel>
  )
}