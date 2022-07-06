import { Flex } from '@chakra-ui/react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import VladAndNikiList from './List/VladAndNikiList'

export default function VladAndNikiPage() {
  return (
    <Flex marginLeft={25}>
        <BreadCrumb home='Home' vlad='Vlad' leo='Leo' />
        <Flex>
          <VladAndNikiList />
        </Flex>
        
    </Flex>
  )
}
