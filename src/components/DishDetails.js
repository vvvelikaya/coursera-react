import React from 'react'
import { CardTitle, Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CarTitle } from 'reactstrap'

class DishDetails extends React.Component {

    constructor(props) {
        super(props)

        // this.state = {
        //     selectedDish: null
        // }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-3">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }


    render() {

        return (
            this.renderDish(this.props.dish)

        )
        //     if (dish != null) {
        //         return (
        //             <div className="col-12 col-md-5 m-3">
        //                 <Card>
        //                     <CardImg width="100%" src={dish.image} alt={dish.name} />
        //                     <CardBody>
        //                         <CardTitle>{dish.name}</CardTitle>
        //                         <CardText>{dish.description}</CardText>
        //                     </CardBody>
        //                 </Card>
        //             </div>
        //         )
        //     }
        //     else {
        //         return (
        //             <div></div>
        //         )
        //     }
    }

}

export default DishDetails