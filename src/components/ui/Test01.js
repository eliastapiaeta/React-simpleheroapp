import React from 'react';
import './test01.css';
// import { dateTime } from '../../helpers/dateTime';

export const Test01 = () => {

    // const [time, setTime] = useState(new Date().toLocaleDateString());

    // useEffect(() => {
    //     setInterval(() => {
    //         setTime(dateTime());
    //     }, 1000);
    //     // return () => {
    //     //     cleanup
    //     // }
    // })

    return (
        <>
            <div className="content">
                {/* <div className="html search">
                    <div className="title bounceInDown animated">Search Result</div>
                    <p className="flipInX animated">Sorry,<br />no matches found htmlFor <b className="key"></b></p>
                </div> */}
                <div className="html welcome">
                    {/* <div className="datetime">
                        <div className="day lightSpeedIn animated">Thursday {time.dateTime_day}</div>
                        <div className="date lightSpeedIn animated">June 18, 2015 {time.dateTime_date}</div>
                        <div className="time lightSpeedIn animated">08:00 AM {time.dateTime_time}</div>
                    </div> */}
                </div>
                <div className="html chats">
                    {/* <div className="tabs-list clearfix">
                        <a href="#" className="tab active">Users</a>
                        <a href="#" className="tab">Messages</a>
                        <a href="#" className="tab">Groups</a>
                    </div>
                    <div className="active-users">
                        <div className="user clearfix rotateInDownLeft animated">
                            <div className="photo pull-left">
                                <img src="./assets/rostrosArtificiales/v3_0184965.jpg" alt='img' />
                            </div>
                            <div className="desc pull-left">
                                <p className="name">Connor Hartigan</p>
                                <p className="position">Web &amp; UI Designer</p>
                            </div>
                            <div className="idle pull-right"><span className="away"></span></div>
                        </div>
                        <div className="user clearfix rotateInDownRight animated">
                            <div className="photo pull-left">
                                <img src="./assets/rostrosArtificiales/v3_0444117.jpg" alt='img' />
                            </div>
                            <div className="desc pull-left">
                                <p className="name">Jacob Lennon</p>
                                <p className="position">Front-End Developer</p>
                            </div>
                            <div className="idle pull-right"><span className="offline"></span></div>
                        </div>
                        <div className="user clearfix rotateInDownLeft animated">
                            <div className="photo pull-left">
                                <img src="./assets/rostrosArtificiales/v3_0993466.jpg" alt='img' />
                            </div>
                            <div className="desc pull-left">
                                <p className="name">Didier Mailly</p>
                                <p className="position">Co-Founder</p>
                            </div>
                            <div className="idle pull-right"><span className="away"></span></div>
                        </div>
                        <div className="user clearfix rotateInDownRight animated">
                            <div className="photo pull-left">
                                <img src="./assets/rostrosArtificiales/v3_0288235.jpg" alt='img' />
                            </div>
                            <div className="desc pull-left">
                                <p className="name">Miguel Cunha Ferreira</p>
                                <p className="position">Sales Manager</p>
                            </div>
                            <div className="idle pull-right"><span className="online"></span></div>
                        </div>
                        <div className="user clearfix rotateInDownLeft animated">
                            <div className="photo pull-left">
                                <img src="./assets/rostrosArtificiales/v3_0396804.jpg" alt='img' />
                            </div>
                            <div className="desc pull-left">
                                <p className="name">Eric Yuriev</p>
                                <p className="position">App Developer</p>
                            </div>
                            <div className="idle pull-right"><span className="online"></span></div>
                        </div>
                        <div className="user clearfix rotateInDownRight animated">
                            <div className="photo pull-left">
                                <img src="./assets/rostrosArtificiales/4.jpg" alt='img' />
                            </div>
                            <div className="desc pull-left">
                                <p className="name">Theodore Clark</p>
                                <p className="position">Project Manager</p>
                            </div>
                            <div className="idle pull-right"><span className="online"></span></div>
                        </div>
                    </div>
                 */}
                </div>
                <div className="html settings visible">
                    <div className="setting-list">
                        <div className="gear clearfix slideInRight animated">
                            <div className="title pull-left">General</div>
                            <div className="action pull-right"><span className="ion-ios-arrow-right"></span></div>
                        </div>
                        <div className="gear clearfix slideInLeft animated">
                            <div className="title pull-left"><label htmlFor="gear-notice">Notification</label></div>
                            <div className="action pull-right"><input id="gear-notice" className="on-off" type="checkbox" /><label htmlFor="gear-notice"></label></div>
                        </div>
                        <div className="gear clearfix slideInRight animated">
                            <div className="title pull-left"><label htmlFor="gear-sound">Sound</label></div>
                            <div className="action pull-right"><input id="gear-sound" className="on-off" type="checkbox" defaultChecked /><label htmlFor="gear-sound"></label></div>
                        </div>
                        <div className="gear clearfix slideInLeft animated">
                            <div className="title pull-left">Theme</div>
                            <div className="action pull-right">Standard <span className="ion-ios-arrow-right"></span></div>
                        </div>
                        <div className="gear clearfix slideInRight animated">
                            <div className="title pull-left">Support</div>
                            <div className="action pull-right"><span className="ion-ios-arrow-right"></span></div>
                        </div>
                        <div className="gear clearfix slideInLeft animated">
                            <div className="title pull-left">Privacy</div>
                            <div className="action pull-right"><span className="ion-ios-arrow-right"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav active">
                <a href="#profile" className="nav-item nav-count-1"><i className="ion-ios-person-outline"></i><span className="invisible">Profile</span></a>
                <a href="#compose" className="nav-item nav-count-2"><i className="ion-ios-compose-outline"></i><span className="invisible">Compose</span></a>
                <a href="#chats" className="nav-item nav-count-3"><i className="ion-ios-chatboxes-outline"></i><span className="invisible">Chats</span></a>
                <a href="#alarm" className="nav-item nav-count-4"><i className="ion-ios-alarm-outline"></i><span className="invisible">Alarm</span></a>
                <a href="#toggle" className="mask"><i className="ion-ios-plus-empty"></i></a>
            </div>

        </>
    )
}
