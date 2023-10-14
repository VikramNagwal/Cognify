import React from "react";
import './ChatBot.css';
import Chatbot from "react-chatbot-kit";

import config from "../../src/chatbot/config";
import MessageParser from "../../src/chatbot/MessageParser";
import ActionProvider from "../../src/chatbot/ActionProvider";
const ChatbotPage =()=>{
    return (
        <div>

        <h1 className="ChatBot-h1">ChatBot</h1>
        <p className="ChatBot-p" >Introducing Cognify, your compassionate mental health companion. This revolutionary
        chatbot is designed to support and guide your emotional well-being journey. The chatbot
        combines cutting-edge AI technology with empathetic understanding to provide a safe space
        for you to express your thoughts and feelings. Whether you need a listening ear, coping
        techniques, or gentle reminders for self-care, Cognify is always available, offering non-
        judgmental support. Cognify will be your constant best friend through your highs and lows.
        Take control of your mental health and let Cognify be your trusted companion on the path to
        healing and resilience. There will always be someone to listen to you, understand you, and
        reciprocate with you.</p>
<div className="chatbot">
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      /></div>
        </div>
        
    )
}
export default ChatbotPage;