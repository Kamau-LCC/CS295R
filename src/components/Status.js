const Status=({status,value})=>{
    console.log('Status Component');
    return ( 
        <div className="pb-2" id='status'>{status}{value}
        
        </div>
    );
}
export default Status;