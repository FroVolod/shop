import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card } from 'antd';
import ReactCardFlip from 'react-card-flip';


const { Meta } = Card;

export const MyCard = ({el, selectProduct}) => {
  const [isFlipped, changeFlipped] = useState(false)
  const onChangeFlipped = () => {
    changeFlipped(!isFlipped);
    selectProduct(el)
  }
  return(
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Card
        hoverable
        style={{ width: 240, minHeight: 400 }}
        cover={<img alt="example" src={ el.image } />}
        onClick={ onChangeFlipped }
      >
        <Link to="/details">
          <Meta title={ el.name } />
        </Link>
      </Card>

      <Card
        hoverable
        style={{ width: 240, minHeight: 400 }}
        cover={<img alt="example" src={ el.image } />}
        onClick={ onChangeFlipped }
      >
        <Meta title={ el.price } />
      </Card>
    </ReactCardFlip>
    
  )
}
