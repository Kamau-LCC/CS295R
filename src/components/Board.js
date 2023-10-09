function Board ({className,i,eventHandler}){
    return (
        <div className={className}
        id={i} 
        onClick={eventHandler}>
        </div> 
    );
}
export default Board;