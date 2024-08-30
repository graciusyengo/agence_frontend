import React from 'react'

function TopBar() {
  return (
   

<div className="bg-dark text-white py-2">
    <div className="container d-flex justify-content-between align-items-center">
        <div>
            <a href="https://www.facebook.com" class="text-white text-decoration-none mx-2" target="_blank" rel="noreferrer">
                <i class="fab fa-facebook icon "></i>
            </a>
            <a href="https://wa.me/1234567890" class="text-white text-decoration-none mx-2" target="_blank" rel="noreferrer">
                <i class="fab fa-whatsapp icon "></i>
            </a>
        </div>
        <div>
            <span class="mx-3"><i className="fas fa-phone-alt icon"></i> +243 896 756 897</span>
            <span class="mx-3"><i className="fas fa-envelope icon"></i> contact@cnt.org</span>
        </div>
    </div>
</div>
  )
}

export default TopBar