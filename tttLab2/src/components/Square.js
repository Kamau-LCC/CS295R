function Square ({className,i,eventHandler,value}){
    return (
        <div className={className}
        id={i} 
        onClick={eventHandler}>
        {value}
        </div> 
    );
}
export default Square;