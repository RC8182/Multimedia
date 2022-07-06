import { Flex, SimpleGrid } from '@chakra-ui/react'
import LeoData from '../../../data/LeoData'

export const LeoList = () => {
  return (
    <SimpleGrid column={3} spacing={0}>
      
        { LeoData.map( data =>(
                    <Flex>
                      <Flex
                      borderRadius='20px'
                      p='20px'
                      h='200px'
                      w={{ base: "315px", md: "345px" }}
                      alignItems='center'
                      direction='column'>
                      
                        <iframe
                          title={data.title}
                          src={data.videoUrl}
                          allowFullScreen
                        />
                      </Flex>
                    </Flex>
            ))}

    </SimpleGrid>
  )
}
