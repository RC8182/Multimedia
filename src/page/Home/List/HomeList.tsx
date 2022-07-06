import { Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import HomeData from '../../../data/HomeData'



export default function HomeList() {
  return (

        <SimpleGrid column={3} spacing={0}>
          
           {HomeData.map(data =>(

         
                <Flex
                
                borderRadius='20px'
                p='20px'
                h='200px'
                w={{ base: "315px", md: "345px" }}
                alignItems='center'
                direction='column'>
                  
                  <Link to={data.link}>
                  <Text title={data.title}/>
                    <Image
                      borderRadius='full'
                      boxSize='150px'
                      title={data.title}
                      src={data.image}
                        />
                        <Text fontSize='sm' align='center' >{data.title}</Text>
                  </Link>

                </Flex>
           

           ))} 
        </SimpleGrid>

  )
}
