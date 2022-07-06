import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

/**
 * Creamos las props para BreadCrum
 */
export type BreadCrumbProps={
    home: string,
    vlad: string,
    leo: string,
}

export default function BreadCrumb({home,vlad,leo} : BreadCrumbProps) {
  return (
<Breadcrumb alignItems={'flex-end'}>
    <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={Link} to='/vlad'>
        {vlad}
        </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={Link} to='/leo'>
        {leo}
        </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrentPage >
        <BreadcrumbLink as={Link} to='/'>
        {home}
        </BreadcrumbLink>
    </BreadcrumbItem>
</Breadcrumb>
  )
}
