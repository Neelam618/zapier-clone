import React, { useState } from 'react'
import { Input, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

const appList = [
    {
        name: "Google Calender", appIcon: "https://zapier-images.imgix.net/storage/services/62c82a7958c6c29736f17d0495b6635c.png?auto=format&fit=crop&h=64&ixlib=react-9.0.2&w=64&ar=undefined&h=21&w=21&q=50&dpr=1"
    },
    {
        name: "Google Contacts", appIcon: "https://zapier-images.imgix.net/storage/services/1508661b55cd3c5ad1787303b0f58c99.png?auto=format&fit=crop&h=64&ixlib=react-9.0.2&w=64&ar=undefined&h=21&w=21&q=50&dpr=1"
    },
    {
        name: "Google Docs", appIcon: "https://zapier-images.imgix.net/storage/services/ae42824b58d556d36b5e5b217377fc5e.png?auto=format&fit=crop&h=64&ixlib=react-9.0.2&w=64&ar=undefined&h=21&w=21&q=50&dpr=1"
    }
]

function AppConnections() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function openChooseAppAndEventStep(appName, appId) {
    }


    return (
        <div id="appConnections">
            <div className="heading">
                <div><h1 className="title">Apps</h1></div>
                <div className="searchContainer">
                    <div className="searchInput"><Input id="inputBox" size="medium" placeholder="Search by App" prefix={<SearchOutlined />} /></div>
                    <div className="addBtnWrapper"><button onClick={showModal} className="addBtn">Add connection</button></div>
                    <Modal className='addConnectionModal' centered title="Add a new app connection" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        {/* <p>Add a new app connection</p> */}
                        <Input size="large" placeholder="Search apps..." prefix={<SearchOutlined />} style={{marginBottom: 10}}/>
                        {
                            appList.map((appItem) => {
                                return (
                                    <div className="appWrapper" onClick={() => openChooseAppAndEventStep(appItem.name, appItem.id)}>
                                        <div className="appIcon" style={{marginRight: 10}}>
                                            <img width="36" src={appItem.appIcon} alt="" />
                                        </div>
                                        <div className="appName">{appItem.name}</div>
                                    </div>
                                )
                            })
                        }
                    </Modal>

                </div>
            </div>
            <div>
                <div className="listItem">
                    <div className="listTitleWrapper">
                        <span className="imgWrapper">
                            <img src="https://cdn.zapier.com/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.32x32.png?auto=format&ar=undefined&fit=crop&ixlib=react-9.0.2&h=28&w=28&q=75&dpr=1" alt="" />
                        </span>
                        <span className="listTitle">Gmail</span>
                    </div>
                    <div>
                        <div className="listDetails">
                            <div className="connections">
                                <span className="count">1</span><div className="countText">Connection</div>
                            </div>
                            <div className="zaps">
                                <span className="count">2</span><div className="countText">Zaps</div>
                            </div>
                            <div>
                                <svg className="arrowIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#136bf5"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppConnections
