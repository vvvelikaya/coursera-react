import React from 'react'
import { CardTitle } from 'reactstrap'
import { Card, CardImg, CardImgOverlay } from 'reactstrap'


class Menu extends React.Component {

    constructor(props) {
        super(props)
    }

    


    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-3">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }

}

export default Menu