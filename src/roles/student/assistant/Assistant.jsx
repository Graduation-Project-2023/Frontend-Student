import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import axios from "axios";
import { STUDENT_URL } from "../../../shared/API";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  Avatar,
  MessageInput,
  TypingIndicator,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import assistantAvatar from "../../../shared/images/gpt.jpg";
import profile from "../../../shared/images/profile.jpeg";

// Reusable Components and Images
import { SidebarCont } from "../../../components/header/SidebarCont";

export const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      message: "اهلا بك! انا مساعدك الالكتروني",
      sentTime: "just now",
      sender: "assistant",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [arabic, setArabic] = useState(false);
  const authContext = useAuth();

  useEffect(() => {
    if (i18next.language === "ar") {
      setArabic(true);
    } else {
      setArabic(false);
    }
  }, [i18next.language]);

  const handleSend = (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);

    axios
      .post(STUDENT_URL + `/assist?studentId=${authContext.id}`, {
        prompt: message,
      })
      .then((res) => {
        console.log(res);
        setMessages([
          ...newMessages,
          {
            message: res.data.answer.replace(/^\n{2}/, ""),
            sender: "assistant",
          },
        ]);
        setIsTyping(false);
      })
      .catch((err) => {
        console.log(err);
        setMessages([
          ...messages,
          {
            message: "your assistant is resting, please try again later",
            sender: "assistant",
          },
        ]);
        setIsTyping(false);
      });
  };

  return (
    <SidebarCont>
      <div style={{ height: "700px", width: "700px", margin: "2rem" }}>
        <ConversationHeader>
          <Avatar src={assistantAvatar} name="Assistant" />
          <ConversationHeader.Content>
            <span
              style={{
                color: "blue",
                alignSelf: "flex-center",
                fontSize: "20px",
                margin: "0 10px",
              }}
            >
              المساعد الذكي
            </span>
          </ConversationHeader.Content>
        </ConversationHeader>
        <MainContainer>
          <ChatContainer
            style={{
              padding: "20px 0px 0px 0px",
            }}
          >
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="Your assistant is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                return (
                  <Message
                    key={i}
                    model={message}
                    className={
                      arabic && message.sender === "user" ? "message-ar" : ""
                    }
                  >
                    {message.sender === "assistant" ? (
                      <Avatar src={assistantAvatar} name="Assistant" />
                    ) : (
                      <Avatar src={profile} name="User" />
                    )}
                  </Message>
                );
              })}
            </MessageList>
            <MessageInput
              placeholder="Type message here"
              onSend={handleSend}
              attachButton={false}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </SidebarCont>
  );
};
