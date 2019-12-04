import React from 'react'
import {
  Background,
  Box,
  Row,
  Text,
  Heading,
  P,
  Flex
} from 'serverless-design-system'
import { InternalLink } from 'src/fragments'
import { getLinkComponent } from 'src/components/BlockLink'
import {
  getAuthorLink,
  getBlogLink,
  getCategoryLink,
  getAuthorInfo,
  getCategoryNameById,
} from 'src/utils/blog'
import { formatDate } from 'src/utils/date'
import ImagePlaceholder from './ImagePlaceholder'
import { Column } from 'serverless-design-system/dist/atoms'

//TODO: Heading and P tag don't conform to usual sizing pattern - revisit

const HyperLinkBackground = getLinkComponent(Background)
const HyperLinkImagePlaceholder = getLinkComponent(ImagePlaceholder)

export default ({ id, frontmatter }) => {
  const { title, date, description, category: categoryIds, thumbnail } = frontmatter
  const author = getAuthorInfo({ frontmatter })

  return (
    <Flex mb={[62]} flexWrap='wrap' flexDirection='column'>
          {
            thumbnail ? (
              <img src={thumbnail} style={{width: '365px'}}/>
            ) : (
              <HyperLinkImagePlaceholder
                size='small'
                wrapperProps={{
                  width: [55, 55, 55, 1],
                  height: [55, 55, 55, 200]
                }}
              />
            )
          }
      <Box
        pr={['10px', '10px', '10px', '10%']}
      >
        <Box>
          <Text.span
            fontSize={[0, 0, 0, 1]}
            lineHeight={4}
            opacity={0.4}
            letterSpacing='text'
            fontFamily='Soleil'
            mt={0}
          >
            {
              categoryIds.map((categoryId, index) => (
                <React.Fragment key={`${id}-${categoryId}`}>
                  <InternalLink to={getCategoryLink(categoryId)}>
                    { getCategoryNameById(categoryId) }
                  </InternalLink>
                  {
                    (index !== categoryIds.length-1) ? (
                      <React.Fragment>
                        ,&nbsp;
                      </React.Fragment>
                    ) : null
                  }
                </React.Fragment>
              ))
            }
            {
              categoryIds.length ? (
                <React.Fragment>
                  &nbsp;-&nbsp;
                </React.Fragment>
              ) : null
            }
            { formatDate(date, 'dd.mm.yy') }
          </Text.span>
        </Box>
        <InternalLink to={getBlogLink(id)}>
          <Box pt={1}>
            <h4 className='sls-h4'>
              { title }
            </h4>
          </Box>
        </InternalLink>
      </Box>
    </Flex>
  )
}