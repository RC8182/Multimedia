import { Flex, SimpleGrid, } from '@chakra-ui/react'
import VladAndNiki from '../../../data/VladAndNikiData'


export default function VladAndNikiList () {
  return (
   
    <SimpleGrid columns={3} spacing={0}>

        { VladAndNiki.map( video =>(
          
          <Flex>
            <Flex
            borderRadius='20px'
            p='20px'
            h='200px'
            w={{ base: "315px", md: "345px" }}
            alignItems='center'
            direction='column'>
            
              <iframe
                title={video.title}
                src={video.videoUrl}
                allowFullScreen
              />
            </Flex>
          </Flex>
   
         ))}
             
    </SimpleGrid>
  )
}
