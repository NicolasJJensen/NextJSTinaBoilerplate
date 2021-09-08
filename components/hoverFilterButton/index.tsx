import styles from "./styles.module.scss"

type propsType = {
  children: React.ReactNode | string,
  filterHeight?: string,
  filterColor?: string,
  buttonWords?: string,
}

const hoverFilterButton = (props: propsType) => {

  
  return (
    <a className={styles.wrapper}>
      {props.children}

      <div 
        className={styles.filterButton}
        style={{
          ...(props.filterHeight ? {'--filter-height': props.filterHeight} : {}),
          ...(props.filterColor ? {'--filter-color': props.filterColor} : {})
        } as any}
      >
        <span>{props.buttonWords ? props.buttonWords : 'Shop Now'}</span>

      </div>
    </a>
  )

}

export default hoverFilterButton

