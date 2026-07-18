export interface FAQItem {
  question: string;
  answer: string;
}

export const extractFAQs = (content: string): FAQItem[] | null => {
  const faqs: FAQItem[] = [];

  // Check if content has a FAQ section
  if (!content.includes('## FAQs') && !content.includes('## FAQ')) {
    return null;
  }

  // Split content into paragraphs
  const paragraphs = content.split('\n\n');

  let inFAQSection = false;
  let currentQuestion = '';

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i].trim();

    // Check if we're entering FAQ section
    if (paragraph === '## FAQs' || paragraph === '## FAQ') {
      inFAQSection = true;
      continue;
    }

    // Check if we've exited FAQ section (hit another ## heading)
    if (inFAQSection && paragraph.startsWith('## ') && paragraph !== '## FAQs' && paragraph !== '## FAQ') {
      break;
    }

    if (inFAQSection) {
      // Check if this is a question (### heading)
      if (paragraph.startsWith('### ')) {
        // If we have a previous question, we need to get its answer
        if (currentQuestion && i > 0) {
          // This means the previous FAQ is complete, move to next
        }
        currentQuestion = paragraph.replace('### ', '').trim();
      } else if (currentQuestion && paragraph.length > 0) {
        // This is the answer to the current question
        faqs.push({
          question: currentQuestion,
          answer: paragraph
        });
        currentQuestion = ''; // Reset for next question
      }
    }
  }

  return faqs.length > 0 ? faqs : null;
};
