import React, { Component } from 'react';
import { Card,CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
     constructor(props){
         super(props);
         this.state = {
            selectedDish: null
         }
     }

     onDishSelect(dish) {
        this.setState({ selectedDish: dish});
      }
     renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                      <CardTitle> {dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
        }
  renderComments(dish){
    if(dish!=null)
      return(
        <div>
        <h4>Comments</h4>
         <p>{dish.comments.comment}</p>
         <p>{dish.comments.author},{dish.comments.date}</p>
         </div>
      );

    else
      return(
          <div></div>
        );
  }


 render() {
    const newdish = this.props.DISHES.map((dish) => {
    return(
            <div className="col-12 col-md-5 m-1">
              <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
              </Card>
          </div>
        );
    });
  

    return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(newdish)}
              </div>
            </div>
        </div>
      );
    }

}
export default DishDetail;
