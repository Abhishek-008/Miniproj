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
    { text: "Had nightmares about the event(s) or thought about the event(s) when you did not want to?" },
    { text: "Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?" },
    { text: "Been constantly on guard, watchful, or easily startled?" },
    { text: "Felt numb or detached from people, activities, or your surroundings?" },
    { text: "Felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the events may have caused?" },
    { text: "How often have you experienced flashbacks or distressing memories?" },
    { text: "Do you often feel jumpy or easily startled?" },
    { text: "Do you find it difficult to focus on tasks?" },
    { text: "Have you had trouble sleeping due to traumatic experiences?" },
    { text: "Do you experience stress when thinking about past events?" },
  ],
  bipolar: [
    { text: "You felt much more self-confident than usual?" },
    { text: "You got much less sleep than usual and found you didn’t really miss it?" },
    { text: "You were much more talkative or spoke faster than usual?" },
    { text: "Thoughts raced through your head, or you couldn’t slow your mind down?" },
    { text: "You had much more energy than usual?" },
    { text: "You were much more active or did many more things than usual?" },
    { text: "You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?" },
  ],
};

// Fetch questions based on the disorder type
export const getQuestionsByDisorder = (disorder) => {
  return questionBank[disorder] || [];
};
