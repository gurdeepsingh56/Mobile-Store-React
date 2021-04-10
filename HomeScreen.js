import { Container } from '@material-ui/core'
import React from 'react'
import Products from '../../Products/Products'
import './HomeScreen.css'
function HomeScreen() {
    return (
        <div >
            <Container>
                <h2 className="homeScreen_title"> Latest Product</h2>
                <div className="homeScreen_products">
                 <Products />
                </div>
            </Container>
        </div>
    )
}

export default HomeScreen
