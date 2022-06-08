import Image from 'next/image'
import styles from '/styles/Footer.module.css'

export default function footer() {
  return (
    <>
      <div className={styles.dis}>
        <a className={styles.imghref}  href='https://www.facebook.com/Lavidacrafts/' target='_blank'>
          <Image
                      src='/Images/facebook.png'
                      alt="Facebook logo"
                      height={50}
                      width={50}
                      objectFit="responsive" />
        </a>
        <a className={styles.imghref} href='https://instagram.com/Lavidacrafts1' target='_blank'>
          <Image
                        src='/Images/instagram.png'
                        alt="instagram logo"
                        height={50}
                        width={50}
                        objectFit="responsive" />
        </a>
        <a className={styles.imghref} href='https://tiktok.com/@Lavidacrafts1' target='_blank'>
          <Image
                      src='/Images/tiktok.png'
                      alt="tiktok logo"
                      height={50}
                      width={50}
                      objectFit="responsive" />
        </a>
      </div>
      <div className={styles.dis}>
          <a
            href="https://artyvazquez.github.io/arturo-vazquez/"
            target="_blank"
            rel="noopener noreferrer"
          >
                Designed by {' '}
              <span>
                <Image src="/arty.png" alt="Arty Logo" width={25} height={25} />
              </span>
          </a>
      </div>
    </>
    
  )
}