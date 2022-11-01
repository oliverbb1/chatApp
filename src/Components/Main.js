import React from "react";
import conversationsJSON from "../conversation.json";
import { useState } from "react";
import Messages from "./Messages";

function Main() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversations, setConversations] = useState(() => {
    return conversationsJSON.map((conversation) => {
      return {
        ...conversation,
        messages: conversation.messages.sort((a, b) => a.time - b.time),
      };
    });
  });
  const [input, setInput] = useState("");

  React.useEffect(() => {
    setInput("");
  }, [selectedConversation]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length < 1) {
      return;
    }

    setConversations((conversations) => {
      const activeConversation = {
        ...conversations[selectedConversation],
        messages: [
          ...conversations[selectedConversation].messages,
          {
            //prebacujemo u unix
            // davao mi je u ms pa zato ide /1000
            time: Math.round(new Date().getTime() / 1000),
            content: input,
            type: "sent",
          },
        ],
      };

      setInput("");

      //vraca apdejtovanu konv sa porukom koju sam napisao
      //ako je conv index 1 ovo je sve prije 1
      ////ako je conv index 1 ovo je sve poslije 1
      // slice od ako je index 1 index od 2
      //prvo preskocim, drugo ne
      return [
        ...conversations.slice(0, selectedConversation),
        activeConversation,
        ...conversations.slice(selectedConversation + 1),
      ];
    });
  };
  return (
    <section className="main">
      <div className="all">
        <div className="leftSide">
          <div className="userData">
            {/* //conditional rendering */}
            {conversations &&
              conversations.map((conversation, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedConversation(index);
                    }}
                    className={`users ${
                      index === selectedConversation && "activeUser"
                    } `}
                  >
                    <img
                      className="userPicture"
                      src={conversation.picture_data.src}
                      alt={conversation.picture_data.alt}
                    />
                    <div className="userName">
                      <p>{conversation.name}</p>
                      <p>{conversation.status}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {selectedConversation === null ? (
          <div className="rightSide">
            <p>Please select chat to start conversation</p>
          </div>
        ) : (
          <>
            <div className="activeConversation">
              <div
                className={`conversationBg ${
                  selectedConversation !== null && "dimmed"
                }`}
              ></div>
              <div className="conversationInner">
                <Messages
                  conversations={conversations}
                  conversationIndex={selectedConversation}
                />
                {/* onssubmit handler 
By default, the browser will refresh the page when a form submission event is triggered.

We generally want to avoid this in React.js applications because it would cause us to lose our state.

To prevent the default browser behavior, we have to use the preventDefault() method on the event object. */}
                <form className="conversationFooter" onSubmit={handleSubmit}>
                  <input
                    //kontroled input povezujem state sa inputom
                    //event handler koji updatuje state kada se promeni vrednost inopta
                    onChange={(e) => setInput(e.target.value)}
                    className="input"
                    value={input}
                  />

                  <button className="sendBtn">Send</button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Main;
