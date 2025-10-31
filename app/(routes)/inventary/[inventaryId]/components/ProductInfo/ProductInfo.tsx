import React from 'react'
import InfoCard from '@/components/InfoCard'
import { ProductInfoProps } from './ProductInfo.types'
import { getProductInfoData } from './ProductInfo.data'

export default function ProductInfo(props: ProductInfoProps) {
  const { productId } = props
  const productInfoData = getProductInfoData(productId)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3'>
      {productInfoData.map((item, index) => (
        <InfoCard
          key={index}
          title={item.title}
          content={item.content}
          tooltipContent={item.tooltipContent}
        />
      ))}
    </div>
  )
}
