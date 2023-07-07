import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../shared/API";
import { getIo } from "../../../shared/Socket";
import axios from "axios";

// Components
import { Backdrop } from "../../../components/loaders/Backdrop";
import { Alert } from "react-bootstrap";
import { Chat } from "./Chat";

export const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [professors, setProfessors] = useState([
    {
      id: "8dc2a88d-0353-4031-bac6-a01dd070fb75",
      englishName: "Dr. Salem El Hamood",
      arabicName: "د/ سالم الحمود",
    },
  ]);
  const [userUX, setUserUX] = useState({
    chat: {
      loading: false,
      error: false,
      errorMsg: "",
    },
    sidebar: {
      loading: false,
      error: false,
      errorMsg: "",
    },
  });
  const authContext = useAuth();
  const { t } = useTranslation();
  const socket = getIo();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket");
    });

    socket.emit("subscribe", "c34fac0d-c0d2-464b-b8e5-b71873d8d484");

    socket.on("receive-message", (data) => {
      console.log("receive-message", data);
      setMessages((prev) => [
        ...prev,
        {
          message: data.text,
          sender: "professor",
          direction: "outgoing",
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setUserUX((prev) => ({
      chat: {
        ...prev.chat,
        loading: true,
      },
      //   sidebar: {
      //     ...prev.sidebar,
      //     loading: true,
      //   },
    }));
    // Get all messages sent or recieved by the user
    axios
      .get(BASE_URL + "/message")
      .then((res) => {
        console.log(res);
        setMessages([
          ...res.data.messagesReceived?.map((message) => ({
            ...message,
            message: message.text,
            sender: "professor",
            direction: "outgoing",
          })),
          ...res.data.messagesSent?.map((message) => ({
            ...message,
            message: message.text,
            sender: "user",
          })),
        ]);
        setUserUX((prev) => ({
          ...prev,
          chat: {
            ...prev.chat,
            loading: false,
          },
        }));
      })
      .catch((err) => {
        console.log(err);
        setUserUX((prev) => ({
          ...prev,
          chat: {
            ...prev.chat,
            loading: false,
            error: true,
            errorMsg: "error.common",
          },
        }));
      });

    // eslint-disable-next-line
  }, []);

  const sendMessage = (text, professorId) => {
    const message = {
      senderId: "c34fac0d-c0d2-464b-b8e5-b71873d8d484",
      receiverId: "8dc2a88d-0353-4031-bac6-a01dd070fb75",
      text: text,
    };
    socket.emit("message-sent", message);
    setMessages((prev) => [
      ...prev,
      {
        message: text,
        sender: "user",
        createdAt: new Date(),
      },
    ]);
  };

  return (
    <>
      {userUX.sidebar?.loading || userUX.chat.loading ? (
        <Backdrop />
      ) : userUX.sidebar?.error || userUX.chat.error ? (
        <Alert
          variant="danger"
          style={{
            width: "90%",
            margin: "20px auto",
          }}
        >
          {t(userUX.chat.errorMsg || userUX.sidebar?.errorMsg)}
        </Alert>
      ) : (
        <Chat
          professors={professors}
          messages={messages}
          sidebarUX={userUX.sidebar}
          chatUX={userUX.chat}
          sendMessage={sendMessage}
        />
      )}
    </>
  );
};
