import { Flex } from '@chakra-ui/react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { LeoList } from './List/LeoList'

export default function LeoPage() {
  return (
    <Flex marginLeft={25}>
      <BreadCrumb  home='Home' leo='Leo' vlad='Vlad' />
      <Flex>
        <LeoList/>
      </Flex>
      
    </Flex>
  )
}
