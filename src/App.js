import React, { useState } from 'react'
import Info from './info'
import question from './data'

function App() {
  const [questions,setQuestions]=useState(question);
  return (
    <main>
      <div className="container">
        <h3>question and answers about login</h3>
        <section className="info">
          {questions.map((question)=>{
            return <Info key={question.id} {...question}></Info>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
