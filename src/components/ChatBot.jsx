import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { TbMessageChatbot } from "react-icons/tb";
import { MainContainer, ChatContainer, MessageList, Message,MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
const apiKey = "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"

  const [messages, setMessages] = useState([
    {
      message:"Hello, I am Hope!",
      sender:"Hope"
    }

    
  ])
  const [typing, setTyping] = useState(false)

  const sendHandle=async (message)=>{
    const newMessage = {
      message: message,
      sender:"user",
      direction: "outgoing"
    }
    const newMessages = [...messages, newMessage];
    setMessages(newMessages)

    setTyping(true)
    await processMessage(newMessages)
  }
  async function processMessage(chatMessages){
  let apiMessage = chatMessages.map((messageObject)=>{
      let role = "";
      if(messageObject.sender==="Hope"){
        role = "assistant"
      }
      else{
        role="user"
      }
      return {role:role, content: messageObject.message}
    });
    const systemMessage = {
      role:"system",
      content:"Explain all questions like a caring friend"
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages":[
        systemMessage,
        ...apiMessage
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data)=>{
      return data.json()

    }).then((data)=>{
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          ender:"Hope"
        }]
      )
      setTyping(false)
    })
  }
  
  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center bg-purple-600 text-white rounded-full w-12 h-12 focus:outline-none transition-transform duration-300 transform hover:scale-105"
      >
        <TbMessageChatbot className="w-6 h-6" />
      </button>
      <div className={`fixed bottom-20 h-[400px] right-6 transition-opacity duration-300 ${isOpen ? 'opacity-100 bg-white rounded-lg shadow-lg' : 'opacity-0'}`}>
        <div className="bg-white w-80    border border-gray-200 h-[380px]">
          {/* Chatbot content goes here */}
          <div className="p-4">
            <p className="text-lg font-semibold text-gray-800">Hope</p>
            {/* Options based replies */}
            <div className="mt-4 space-y-2 ">
              {/* Example options */}
              
              <div className='relative '>
                <MainContainer className='h-[390px]'>
                  <ChatContainer className='h-[380px] '>
                    <MessageList className='h-[380px] overflow-y-scroll' typingIndicator={typing?<TypingIndicator content="Hope is typing..."/>:null}>
                      {messages.map((message,i)=>{
                        return <Message key={i} model = {message} />
                      })}
                    </MessageList>
                    <MessageInput placeholder='Enter your Query here!' onSend={sendHandle}/>
                  </ChatContainer>
                </MainContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
