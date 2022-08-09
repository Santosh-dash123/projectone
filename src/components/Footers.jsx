import React from 'react'

const Footers = () => {
  const date = new Date().getFullYear();
  return (
    <>
        <div className="bg-light text-center" style={{"backgroundColor":"white","marginTop":"180px"}}>
            <p> &#169; {date} SantoshTech | All Rights Reserved | Terms and condition</p>
        </div>
    </>
  )
}

export default Footers ;
