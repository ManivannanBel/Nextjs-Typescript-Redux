import React from 'react'
import Header from './headers/Header'

function Layout(props : any) {
    return (
        <div>
         <Header/>  
         {props.children} 
        </div>
    )
}

export default Layout
