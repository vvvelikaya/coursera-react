import React from 'react'
import { CardTitle, Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CarTitle } from 'reactstrap'
import DishDetails from './DishDetails'

class Menu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedDish: null
        }
    }

    componentDidMount() {
        console.log('Mounting..')
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    // renderDish(dish) {
    //     if (dish != null) {
    //         return (
    //             <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         )
    //     }
    //     else {
    //         return (
    //             <div></div>
    //         )
    //     }
    // }


    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-3">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (
            <div classname="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetails dish={this.state.selectedDish} />
                    {/* {this.renderDish(this.state.selectedDish)} */}
                </div>
            </div>
        )
    }

}

export default Menu