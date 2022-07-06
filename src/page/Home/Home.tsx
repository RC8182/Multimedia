
import { Flex, } from '@chakra-ui/react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'

import HomeList from './List/HomeList'

export default function Home() {


  return (
    <Flex mr={10} pr={10}>
      <BreadCrumb home='Home' vlad='Vlad' leo='Leo' />
      <Flex>
      <HomeList/> 
      </Flex>
        
     </Flex>

  )
}
