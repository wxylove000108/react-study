import { NavLinkProps } from'react-router-dom'
export interface Menu {
    label:string,
    key:string,
    children?:any[]
}