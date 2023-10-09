const Card = ({index,style,eventHandler}) => {
return(
    <div
        id ={index}
        key ={index}
        name ='card'
        className='col-sm-2 card'
        style={style}
        onClick={eventHandler}
    >    
    </div>
);
};
export default Card;
