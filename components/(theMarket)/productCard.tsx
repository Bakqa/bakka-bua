import React, { useEffect } from 'react'
import styles from '@/styles/componentstyle.module.css'
import Image from 'next/image'
import { initializeColorSelection } from '@/lib/utils'

export default function productCard() {
  useEffect(() => {
    initializeColorSelection();
  }, []);

  return (
    <>
    <div className={styles.productCard}>
        <div className={styles.back}></div>
         <div className={styles.imgBox}>
            <Image src="/assets/images/product1.png" alt="product image" className={`${styles.img} black active`} width={200} height={200} />
            <Image src="/assets/images/product1.png" alt="product image" className={`${styles.img} white`} width={200} height={200} />
            <Image src="/assets/images/product1.png" alt="product image" className={`${styles.img} red`} width={200} height={200} />
            <Image src="/assets/images/product1.png" alt="product image" className={`${styles.img} blue`} width={200} height={200} />
         </div>
         <p className={styles.name}>Product Name</p>

         <div className={styles.productDetails}>
            <h3 className={styles.productName}>Product Name</h3>
            <p className={styles.productPrice}>$99.99</p>
            <div>
                <span className={styles.rating}>★★★★☆</span>
                <span className={styles.reviewCount}>(120 reviews)</span>
            </div>
            <p className={styles.size}>Size:</p>
            <div className={styles.sizeOptions}>
                <button className={styles.sizeButton}>S</button>
                <button className={styles.sizeButton}>M</button>
                <button className={styles.sizeButton}>L</button>
                <button className={styles.sizeButton}>XL</button>
            </div>
            <p className="color">Color:</p>
            <div className={styles.colorOptions}>
                <button className={styles.colorButton} style={{ backgroundColor: '#000' }} data-color="black"></button>
                <button className={styles.colorButton} style={{ backgroundColor: '#fff' }} data-color="white"></button>
                <button className={styles.colorButton} style={{ backgroundColor: '#f00' }} data-color="red"></button>
                <button className={styles.colorButton} style={{ backgroundColor: '#00f' }} data-color="blue"></button>
            </div>
            <button className={styles.addToCart}>Add to Cart</button>
         </div>
    </div>
         
    </>
  )
}
