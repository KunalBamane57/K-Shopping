import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>
           An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. These websites provide a virtual marketplace where businesses and consumers can interact, browse products or services, make purchases, and complete transactions without the need for physical presence.</p>
           <p>
           User accounts enable customers to track orders, manage personal details, and benefit from a personalized shopping experience. Responsive design ensures compatibility across various devices, allowing users to shop seamlessly from desktops, laptops, tablets, or smartphones. Robust search functionality and intuitive navigation enhance the user experience, while customer reviews and ratings provide valuable insights for informed decision-making. With features like order tracking, inventory management, and promotional tools, e-commerce websites facilitate a dynamic and interactive online retail environment, fostering a bridge between businesses and consumers in the digital realm.
           </p>
      </div>
    </div>
  )
}

export default DescriptionBox
