import React from 'react';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import state, { addPost } from './Data/State';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript



root.render(
  <StrictMode>
    <App dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      postsData={state.profilePage.postsData}
      addPost={addPost} />
  </StrictMode>);