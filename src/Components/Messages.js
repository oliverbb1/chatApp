import React from "react";
import dayjs from "dayjs";

function Messages({ conversationIndex, conversations }) {
  const messages = conversations[conversationIndex].messages;
  //imamo referrencu na neki dom objekat/elemenat
  const messagesEndRef = React.useRef(null);
  const messagesDivRef = React.useRef(null);
  React.useEffect(() => {
    if (messagesEndRef.current) {
      // aко је нетачно, дно елемента ће бити поравнато са дном видљиве области претка који се може померати
      messagesEndRef.current.scrollIntoView(false);

      // Scroll into view is scrolling 100 pixels less,
      // fix it by adding on the parent
      if (messagesDivRef.current) {
        messagesDivRef.current.scrollTop += 100;
      }
    }
  }, [conversationIndex, messages]);
  return (
    <div className="activeMessages" ref={messagesDivRef}>
      {messages.map((message, i) => {
        return (
          <ul
            key={i}
            className={
              message.type === "received" ? "sendMessage" : "receivedMessage"
            }
          >
            <li> {message.content}</li>
            <li> {dayjs.unix(message.time).format("h:mm A")}</li>
          </ul>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
export default Messages;
