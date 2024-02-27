import React, { useContext } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
// import MainLayout from '../components/Layout/Boost';

const Room = () => {
    const { roomId } = useParams();

    const Mymeeting = async (element) => {
        let user = "karan";
        const appID = 425281463;

        const serverSecret = "902a3cab305b108a2eb824a880a16d42";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), user?.username || 'username');
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

    return (
        // <MainLayout>
            <center>
                <div className='container -ml-16 flex justify-center items-center align-middle h-screen ' >
                    <div className='w-screen p-3 pt-3 mt-3'>
                        <div ref={Mymeeting} />
                    </div>
                </div>
            </center>
        // </MainLayout>
    );
};

export default Room;
