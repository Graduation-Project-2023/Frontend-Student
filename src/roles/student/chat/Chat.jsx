import { useState } from "react";
import { useTranslation } from "react-i18next";
import icon from "../../../shared/images/profile.png";

// Components
import {
  MainContainer,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  ChatContainer,
  MessageList,
  Message,
  Avatar,
  MessageInput,
  TypingIndicator,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import { SidebarCont } from "../../../components/header/SidebarCont";

export const Chat = (props) => {
  const { t, i18n } = useTranslation();
  const [messageInputValue, setMessageInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "professor",
      direction: "outgoing",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "user",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "professor",
      direction: "outgoing",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "user",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "professor",
      direction: "outgoing",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "user",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "user",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "user",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "user",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "user",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "user",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "user",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "professor",
      direction: "outgoing",
    },
    {
      message: t("assistant.message"),
      sentTime: "just now",
      sender: "professor",
      direction: "outgoing",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [currChat, setCurrChat] = useState("");
  const [professors, setProfessors] = useState([]);

  return (
    <SidebarCont>
      <MainContainer
        responsive
        style={{
          maxHeight: "800px",
        }}
      >
        <Sidebar
          position={"right"}
          scrollable={false}
          style={{
            border: "solid 1px #d1dbe3",
          }}
        >
          <Search placeholder={t("chat.searchName")} />
          <ConversationList>
            <Conversation name="Lilly">
              <Avatar src={icon} name="Lilly" status="available" />
            </Conversation>
            <Conversation name="Joe">
              <Avatar src={icon} name="Joe" status="dnd" />
            </Conversation>

            <Conversation name="Emily" unreadCnt={3}>
              <Avatar src={icon} name="Emily" status="available" />
            </Conversation>

            <Conversation name="Kai" unreadDot>
              <Avatar src={icon} name="Kai" status="unavailable" />
            </Conversation>

            <Conversation name="Akane">
              <Avatar src={icon} name="Akane" status="eager" />
            </Conversation>

            <Conversation name="Eliot">
              <Avatar src={icon} name="Eliot" status="away" />
            </Conversation>

            <Conversation name="Zoe">
              <Avatar src={icon} name="Zoe" status="dnd" />
            </Conversation>

            <Conversation name="Patrik">
              <Avatar src={icon} name="Patrik" status="invisible" />
            </Conversation>
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={icon} name="Zoe" />
            <ConversationHeader.Content>
              <span
                style={{
                  color: "blue",
                  alignSelf: "flex-center",
                  fontSize: "20px",
                  margin: "0 10px",
                }}
              >
                {t("dr.name")}
              </span>{" "}
            </ConversationHeader.Content>
          </ConversationHeader>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              typing ? (
                <TypingIndicator content={t("assistant.typing")} />
              ) : null
            }
          >
            {messages.map((message, i) => {
              return (
                <Message
                  key={i}
                  model={message}
                  className={
                    i18n.language === "ar" && message.sender === "professor"
                      ? "message-ar"
                      : ""
                  }
                >
                  {message.sender === "professor" ? (
                    <Avatar src={icon} name="Professor" />
                  ) : (
                    <Avatar src={icon} name="User" />
                  )}
                </Message>
              );
            })}
          </MessageList>
          <MessageInput
            placeholder={t("assistant.placeholder")}
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
    </SidebarCont>
  );
};
