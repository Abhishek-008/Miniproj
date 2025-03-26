// Questions based on different disorders
const questionBank = {
  depression: [
    { text: "Little interest or pleasure in doing things?" },
    { text: "Feeling down, depressed, or hopeless?" },
    { text: "Trouble falling or staying asleep, or sleeping too much?" },
    { text: "Feeling tired or having little energy?" },
    { text: "Poor appetite or overeating?" },
    { text: "Feeling bad about yourself—or that you are a failure or have let yourself or your family down?" },
    { text: "Trouble concentrating on things, such as reading the newspaper or watching television?" },
    { text: "Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual?" },
    { text: "Thoughts that you would be better off dead or of hurting yourself in some way?" },
  ],
  anxiety: [
    { text: "Feeling nervous, anxious, or on edge?" },
    { text: "Not being able to stop or control worrying?" },
    { text: "Worrying too much about different things?" },
    { text: "Trouble relaxing?" },
    { text: "Being so restless that it is hard to sit still?" },
    { text: "Becoming easily annoyed or irritable?" },
    { text: "Feeling afraid, as if something awful might happen?" },
  ],
  trauma: [
    { text: "How often have you experienced flashbacks or distressing memories?" },
    { text: "Do you often feel jumpy or easily startled?" },
    { text: "Do you find it difficult to focus on tasks?" },
    { text: "Have you had trouble sleeping due to traumatic experiences?" },
    { text: "Do you experience stress when thinking about past events?" },
  ],
  bipolar: [
    { text: "Do you experience extreme mood swings?" },
    { text: "Do you sometimes have bursts of energy, followed by periods of exhaustion?" },
    { text: "Do you have trouble concentrating during mood shifts?" },
    { text: "How often do you struggle with insomnia or too much sleep?" },
    { text: "How often do you feel stress or anxiety during mood shifts?" },
  ],
};

// Fetch questions based on the disorder type
export const getQuestionsByDisorder = (disorder) => {
  return questionBank[disorder] || [];
};
