import React from 'react'

import { Flex, Column } from 'serverless-design-system'

import DocsColumn from './DocsColumn'
import ProductsColumn from './ProductsColumn'
import ServicesColumn from './ServicesColumn'
import LearnColumn from './LearnColumn'
import CommunityColumn from './CommunityColumn'
import CompanyColumn from './CompanyColumn'
import PricingColumn from './PricingColumn'

// Renders the entire footer list items
const LeftSection = () => (
  <Column
    width={[1, 1, 0.7, 1, 0.65]}
    order={['2', '2', '2', '2', '1']}
    justifyContent={['space-between', 'space-between', 'initial']}
  >
    <Flex width={1} flexWrap='wrap' px={0} mb={[62, 62, 52]}>
      <ProductsColumn mobileOrder={1} />
      <DocsColumn mobileOrder={2} />
      <ServicesColumn mobileOrder={5} />
      <PricingColumn mobileOrder={3} />
      <LearnColumn mobileOrder={4} />
      <CommunityColumn mobileOrder={7} />
      <CompanyColumn mobileOrder={6} />
    </Flex>
  </Column>
)

export default LeftSection