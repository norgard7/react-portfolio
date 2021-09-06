import React from 'react';
import  { Redirect } from 'react-router-dom';

function Error404() {
    return (
        <div>
            <Redirect to ="/react-portfolio" />
        </div>
    )
}
export default Error404;
// const ProtectedComponent = () => {
//   if (authFails)
//     return <Redirect to='/Home'  />
//   }
//   return  <div> My Protected Component </div>
 
// export default ProtectedComponent;
