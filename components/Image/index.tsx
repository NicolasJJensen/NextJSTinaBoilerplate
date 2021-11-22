import { Fragment } from 'react'
import ReactImage from 'next/image'
import hoverFilterButton from '../HoverFilterButton'
import styles from "./styles.module.scss"

type propsType = {
  src: string,
  alt: string,
  layout: string,
  objectFit: string,
  border: boolean,
  hoverButton: boolean,
  minImgWidth?: number,
  maxImgWidth?: number,
  whRatio?: number 
}

const defaultProps = {
  layout: 'fill',
  objectFit: 'cover',
  imageBorder: false,
  hoverButton: false,
}

const Image = (props: propsType) => {

  const Wrapper = props.hoverButton ? hoverFilterButton : Fragment

  return (
    <div 
    className={props.border ? `${styles.imageBorder} ${styles.imageWrapper}` : styles.imageWrapper}
    style={{
      ...(props.minImgWidth ? {'--min-img-width': `${props.minImgWidth}px`} : {}),
      ...(props.maxImgWidth ? {'--max-img-width': `${props.maxImgWidth}px`} : {}),
      ...(props.whRatio ? {'--w-h-ratio': props.whRatio} : {})
    } as any}>
      <Wrapper>
        <ReactImage 
        loader={() => props.src}
        src={props.src}
        alt={props.alt}
        layout='fill'
        objectFit='cover' />
      </Wrapper>
    </div>
  )
}

Image.defaultProps = defaultProps
export default Image


