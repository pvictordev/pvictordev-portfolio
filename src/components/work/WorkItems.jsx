import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <div className='work__img-container'>
        <img 
            src={item.image} 
            alt=""  
            className='work__img'
        />
        </div>

        <div className='work__text'>
          <h3 className="work__title">
              {item.title}
          </h3>

          <span className='work__description'>{item.description}</span>

          <div className='work__check'>
            <a href={item.code} className="work__button">
                Code <i class="uil uil-github-alt"></i>
                {/* <i className="bx bx-right-arrow-alt work__button-icon"></i> */}
            </a>
            <a href={item.demo} className="work__button">
                Demo <i class="uil uil-browser"></i>
                {/* <i className="bx bx-right-arrow-alt work__button-icon"></i> */}
            </a>

          </div>
        </div>

    </div>
  )
}

export default WorkItems
