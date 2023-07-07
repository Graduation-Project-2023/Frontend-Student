import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

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
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import { SidebarCont } from "../../../components/header/SidebarCont";
import { Alert } from "react-bootstrap";
import studentIcon from "../../../shared/images/profile.png";
import professorIcon from "../../../shared/images/professor.jpg";

export const Chat = ({
  professors,
  messages,
  sidebarUX,
  chatUX,
  sendMessage,
}) => {
  const { t, i18n } = useTranslation();
  const [messageInputValue, setMessageInputValue] = useState("");
  const [currChat, setCurrChat] = useState({});
  const msgListRef = useRef();

  useEffect(() => {
    msgListRef.current.scrollToBottom("auto");
  }, [messages]);

  return (
    <SidebarCont>
      {!currChat.id && <Alert variant="info">{t("chat.selectChat")}</Alert>}
      <MainContainer
        responsive
        style={{
          maxHeight: "800px",
          minHeight: "800px",
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
            {professors?.map((professor) => {
              return (
                <Conversation
                  name={
                    i18n.language === "en"
                      ? professor.englishName
                      : professor.arabicName
                  }
                  key={professor.id}
                  onClick={() => {
                    setCurrChat({
                      id: professor.id,
                      englishName: professor.englishName,
                      arabicName: professor.arabicName,
                    });
                  }}
                  active={currChat.id === professor.id}
                >
                  <Avatar
                    src={professorIcon}
                    name={professor.name}
                    status={professor.status}
                  />
                </Conversation>
              );
            })}
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          {currChat.id && (
            <ConversationHeader>
              <ConversationHeader.Back />
              {currChat.id && (
                <Avatar
                  src={professorIcon}
                  name={
                    i18n.language === "en"
                      ? currChat.englishName
                      : currChat.arabicName
                  }
                />
              )}
              <ConversationHeader.Content>
                <span
                  style={{
                    color: "blue",
                    alignSelf: "flex-center",
                    fontSize: "20px",
                    margin: "0 10px",
                  }}
                >
                  {i18n.language === "en"
                    ? currChat.englishName
                    : currChat.arabicName}
                </span>
              </ConversationHeader.Content>
            </ConversationHeader>
          )}
          <MessageList scrollBehavior="smooth" ref={msgListRef}>
            {currChat.id &&
              messages
                ?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                .map((message, i) => {
                  return (
                    <Message
                      key={i}
                      model={message}
                      className={
                        i18n.language === "ar" && message.sender === "user"
                          ? "message-ar"
                          : ""
                      }
                      style={{ marginBottom: "18px" }}
                    >
                      {message.sender === "user" ? (
                        <Avatar src={studentIcon} name="User" />
                      ) : (
                        <Avatar src={professorIcon} name="Professor" />
                      )}
                    </Message>
                  );
                })}
          </MessageList>
          <MessageInput
            placeholder={t("chat.placeholder")}
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            onSend={(val) => {
              sendMessage(val, currChat.id);
              setMessageInputValue("");
            }}
            attachButton={false}
            disabled={!currChat.id}
          />
        </ChatContainer>
      </MainContainer>
    </SidebarCont>
  );
};
