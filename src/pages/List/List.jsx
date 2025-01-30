import './List.css'


const List = () => {


  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
           <b>Image</b>
           <b>Name</b>
           <b>Category</b>
           <b>Price</b>
           <b>Action</b>
        </div>
        {/* use ,ap */}
        <div className="list-table-format" >
                <img src="" alt="" />
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p className='curser'>X</p>
                
              </div>
      </div>
    </div>
  )
}

export default List