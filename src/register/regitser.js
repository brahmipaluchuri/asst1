import React, { useState } from 'react'
import './register.scss'

const Registration = () => {
  const [data,setData] = useState([])
  const [dataformate,setDataformate] = useState({
    username:'',
    address:'',
    age:'',
    hobby:''
  })

    const handleSubmit=(e)=>{
         e.preventDefault()
         setData([...data,{...dataformate}])
         setDataformate({
            username:'',
            address:'',
            age:'',
            hobby:''
         })
         
        }

    const handleChange=(e)=>{
        const {name,value} = e.target
        setDataformate((prevalue)=>({
            ...prevalue,
            [name] : value

        }))
    }


return (
    <div className='home__head'>
      <div className='home__head1'>
        <h3>Registration From</h3>
        <form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h6>Full Name <span className='text-danger'>*</span></h6>
              <div className='row'>
                 <div className='col-6 fulldetails'>
                     <input name='username' value={dataformate.username} onChange={handleChange} type='text' className='form-control' />
                     <span>Username</span>
                     <i class="bi bi-person-fill"></i>
                 </div>
                 <div className='col-6 fulldetails'>
                     <input name='address' value={dataformate.address} onChange={handleChange} type='text' className='form-control' />
                     <span>Address</span>
                     <i class="bi bi-badge-ad"></i>
                 </div>
                 <div className='col-6 fulldetails'>
                     <input name='age'  value={dataformate.age} onChange={handleChange} type='number' className='form-control' />
                     <span>Age</span>
                     <i class="bi bi-badge-ad"></i>
                 </div>
                 <div className='col-6 fulldetails'>
                     <input name='hobby' type='text' value={dataformate.hobby} onChange={handleChange} className='form-control' />
                     <span>Hobby</span>
                     <i class="bi bi-badge-ad"></i>
                 </div>
              </div>
            </div>
          </div>
          <div className='btn'>
              <button className='btn btn-primary'>Submit</button>
          </div>
        </div>
        </form>
        <div className='home__footer'>
        {(data.length > 0  && <div className='home__foot'>
                     <span>Name</span>
                     <span>Address</span>
                     <span>Age</span>
                     <span>Hobby</span>
        </div>)}
           
            {
              data.map((item)=>{
                return (
                    <div className='home__foot1'>
                      <span>{item.username}</span>
                      <span>{item.address}</span>
                      <span>{item.age}</span>
                      <span>{item.hobby}</span>
                    </div>
                )
              })
            }
        </div>
     </div>  
    </div>
  )
}

export default Registration