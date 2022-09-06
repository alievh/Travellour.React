import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Setting = () => {
    const sidebarIsActive = useSelector((state:any) => state.sidebarToggle.isActive);

  return (
    <section className={`setting-section ${!sidebarIsActive && "sidebar-notactive"}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='setting-section__user'>
                        <div className='user-info'>
                            <div className='user-avatar'>
                                <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg" />
                            </div>
                            <div className='user-fullname'>
                                <h5>Marvin McKinney</h5>
                                <span>Member since 2022</span>
                            </div>
                        </div>
                        <div className='user-logout'>
                            <ul>
                                <li><Link to="/newsfeed"><i className="fa-solid fa-house-user"></i></Link></li>
                                <li><Link to="/"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='setting-section__personal-info'>
                        <h4>Personal Information</h4>
                        <form>
                            <input  />
                        </form>
                    </div>
                    <div className='account-section__account-setting'>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Setting;