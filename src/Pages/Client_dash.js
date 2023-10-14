// import React, { useState, useEffect } from 'react';
// import TreatmentPlan from './TreatmentPlan';
// import Checklist from './checklist';
// import Calendar from './Dynamaic_calandar';
// import './Client_dash.css';
// const ClientDashboard = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');

//   const sampleClientProfile = {
//     name: 'John Doe',
//     profilePicture: 'profile.jpg',
//     goals: 'Manage anxiety, improve self-esteem',
//     treatmentPlan: 'Weekly counseling sessions, daily mindfulness exercises',
//   };

//   const sampleTasks = [
//     { id: 1, name: 'Mindfulness exercises' },
//     { id: 2, name: 'Breathing techniques' },
//     { id: 3, name: 'Journaling' },
//   ];

//   const sampleActivities = [
//     { id: 1, name: 'Counseling session', date: '2023-08-22' },
//     { id: 2, name: 'Mindfulness practice', date: '2023-08-24' },
//   ];

//   const handleSendMessage = () => {
//     if (inputMessage.trim() !== '') {
//       const newMessage = {
//         id: Date.now(),
//         sender: 'Client',
//         text: inputMessage,
//       };
//       setMessages([...messages, newMessage]);
//       setInputMessage('');

//       // Simulate MHP response after a delay
//       setTimeout(() => {
//         const responseMessage = {
//           id: Date.now(),
//           sender: 'MHP',
//           text: 'Thank you for sharing. How have you been feeling lately?',
//         };
//         setMessages([...messages, responseMessage]);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="client-dashboard">
//       <div className="client-profile">
//         <img src={sampleClientProfile.profilePicture} alt="Profile" />
//         <h1>{sampleClientProfile.name}</h1>
//         <p>{sampleClientProfile.goals}</p>
//         <p>{sampleClientProfile.treatmentPlan}</p>
//       </div>
//       <div className="treatment-section">
//         <TreatmentPlan goals={sampleClientProfile.goals} tasks={sampleTasks} />
//         <Checklist tasks={sampleTasks} />
//       </div>
//       <div className="message-section">
//         <h2>Messages</h2>
//         <div className="messages">
//           {messages.map((message) => (
//             <div key={message.id} className={`message ${message.sender}`}>
//               {message.text}
//             </div>
//           ))}
//         </div>
//         <div className="message-input">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//           />
//           <button onClick={handleSendMessage}>Send</button>
//         </div>
//       </div>
//       <div className="calendar-section">
//         <Calendar activities={sampleActivities} />
//       </div>
//     </div>
//   );
// };

// export default ClientDashboard;
import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TreatmentPlan from './TreatmentPlan';
import Checklist from './checklist';
import Calendar from './Dynamaic_calandar';
import './Client_dash.css';

const ClientDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sampleClientProfile = {
    name: 'John Doe',
    profilePicture: 'profile.jpg',
    goals: 'Manage anxiety, improve self-esteem',
    treatmentPlan: 'Weekly counseling sessions, daily mindfulness exercises',
  };

  const sampleTasks = [
    { id: 1, name: 'Mindfulness exercises' },
    { id: 2, name: 'Breathing techniques' },
    { id: 3, name: 'Journaling' },
  ];

  const sampleActivities = [
    { id: 1, name: 'Counseling session', date: '2023-08-22' },
    { id: 2, name: 'Mindfulness practice', date: '2023-08-24' },
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        sender: 'Client',
        text: inputMessage,
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate MHP response after a delay
      setTimeout(() => {
        const responseMessage = {
          id: Date.now(),
          sender: 'MHP',
          text: 'Thank you for sharing. How have you been feeling lately?',
        };
        setMessages([...messages, responseMessage]);
      }, 1000);
    }
  }

  return (
    <div className="client-dashboard">
      <Tabs>
        <TabList>
          <Tab>Client Profile</Tab>
          <Tab>Treatment</Tab>
          <Tab>Messages</Tab>
          <Tab>Calendar</Tab>
        </TabList>

        <TabPanel>
          <div className="client-profile">
            {/* Client Profile */}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="treatment-section">
            {/* Treatment */}
            <TreatmentPlan goals={sampleClientProfile.goals} tasks={sampleTasks} />
            <Checklist tasks={sampleTasks} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="message-section">
            {/* Messages */}
            <h2>Messages</h2>
            <div className="messages">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="message-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="calendar-section">
            {/* Calendar */}
            <Calendar activities={sampleActivities} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ClientDashboard;
