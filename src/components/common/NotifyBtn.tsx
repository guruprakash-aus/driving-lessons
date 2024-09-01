"use client";

import { useState, useRef } from "react";
// import {
//   NotificationIconButton,
//   NotificationFeedPopover,
// } from "@knocklabs/react";
import { IoMdNotificationsOutline} from 'react-icons/io'

export default function NotifyBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const notifButtonRef = useRef(null);

  return (
    <div>
      {/* <NotificationIconButton
        ref={notifButtonRef}
        onClick={(e) => setIsVisible(!isVisible)}
      />
      <NotificationFeedPopover
        buttonRef={notifButtonRef}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      /> */}
      <IoMdNotificationsOutline size={24} />
    </div>
  );
}