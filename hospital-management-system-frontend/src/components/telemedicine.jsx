import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Telemedicine = () => {
  const { roomId } = useParams();
  const roomRef = useRef(null);
  let zp = useRef(null); // Use useRef to maintain the zp instance

  useEffect(() => {
    const appId = 629439023;
    const serverSecret = "406a79946b5c7f3388c0b1ed6cb8c7ef";
    const userName = "Enter user name";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      userName
    );

    zp.current = ZegoUIKitPrebuilt.create(kitToken);

    zp.current.joinRoom({
      container: roomRef.current,
      scenario: { mode: ZegoUIKitPrebuilt.VideoConference },
    });

    return () => {
      if (zp.current && zp.current.leaveRoom) {
        zp.current.leaveRoom();
      }
    };
  }, [roomId]);

  return (
    <div className="room-page">
      <div ref={roomRef} style={{ width: "100%", height: "100vh" }} />
    </div>
  );
};

export default Telemedicine;
