import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const newsData = [
  {
    category: "Academics",
    categoryColor: "purple",
    title: "National Level Hackathon 2024",
    description:
      "Our college is proud to host the annual national-level hackathon, bringing together the brightest minds.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnNydoBWVdVwBDa9Zkez7sTVuf1Dwg4aEaAebxFMv0JgsOAFiZ0GLArTzRGTsScGYAj1JUwys0u8ITVCjUYrICeLBeTDKiIVL9ANmB91nHT-xrAXtpYFsUySLMSPO_qvHsRsHKj29T7wThxsbWRyU6nG1IqeTRkjmVN5k1ayRuNa-Zfe7BYKVmR5FUBlYVOTgtEon8R2yq55ccSj-4kYN3C1K_OkFJDkVKNjATEwKDsZRSs1vVAndIhkfDX1AHOIJHM4pCBpPdsaQ",
  },
  {
    category: "Workshop",
    categoryColor: "blue",
    title: "AI & Machine Learning Workshop",
    description:
      "A hands-on workshop on the latest trends in Artificial Intelligence and Machine Learning for students.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNKxhsX9uu44gyF6PCuFFk0qJ80_XZdwQw9iht5gahEkVFJLEcjkjdBmHzpdXCvQofFP7vKjkBxJ5f0O68TeTM9wUN9LqFnkFNqXB6h33_EhYgg7FxV_9x6wfPlcKxqYM-fAoZzE7ctKOKf8aCIaXgp_i__G3UiYafiObRiVeD7nqEO3tIgJlyNUttrnXtYjO0_Du3alMBKxZeKFePWWCWW7ahU7iGCt7Bqx4SHdHHY844inTo8T_60iBoRr8lZztKmSfK0p8nd7A",
  },
  {
    category: "Industry",
    categoryColor: "green",
    title: "Industry Collaboration with TechCorp",
    description:
      "We are excited to announce our new partnership with TechCorp for internships and joint research projects.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRmqUk_zOsEM-qBF1n36KvJ1_JxL7zgXHwNtGbvt-I14gTv6BmK4PktGfmJTg0LICuOd3LxE5SMs8ZCl_UR8rxWhYOoxCv7mpTwYR7FGXxIYwMsdNRdTnDmD7K1ZiC3KpeIl7amf5l63f00vGQVCCvJEJqpEzmBMGS1OgX8d2tfBK3gDocQ5gkaRQmTv8MHyBL5wnpyOKaT4cMeBSapz3iXN_q6PkrovsPrHn0x1LX5_DddAhsDBtNP1UqYXTM8d82MUZ2c-lxawY",
  },
];

const newsFilters = [
  {
    label: "Latest News",
    active: true,
    className: "text-white bg-purple-600 shadow-md",
  },
  {
    label: "Upcoming Events",
    active: false,
    className: "text-gray-600 hover:bg-gray-300/70",
  },
];

const noticeData = [
  {
    date: "28 July, 2024",
    title: "B.Tech First Year Mid-Term Exam Schedule",
    link: "#",
    borderColor: "purple-500",
    category: "Examination",
  },
  {
    date: "25 July, 2024",
    title: "Notice for Scholarship Application 2024-25",
    link: "#",
    borderColor: "blue-500",
    category: "Academic",
  },
  {
    date: "22 July, 2024",
    title: "Updated Holiday List for the Current Semester",
    link: "#",
    borderColor: "green-500",
    category: "General",
  },
];

const noticeFilters = [
  { label: "Academic", color: "blue" },
  { label: "Examination", color: "purple" },
  { label: "General", color: "green" },
  { label: "Tenders", color: "yellow" },
];

// --- UPDATED CHATBOT DATA ---
const chatbotQA = [
  {
    question: "Admission requirements?",
    fullQuestion: "What are the admission requirements?",
    answer:
      "Admission requires a qualifying score in the entrance exam and a minimum of 60% in your high school final exams. **The last date for application is August 15th.**",
  },
  {
    question: "Campus location?",
    fullQuestion: "Where is the main campus located?",
    answer:
      "Our main campus is located in the heart of the city, easily accessible by public transport. You can find the full address on our 'Contact Us' page.",
  },

  {
    question: "Placement success rate?",
    fullQuestion: "What is the placement success rate?",
    answer:
      "Our current placement rate is **92%**, with the highest package reaching **35 LPA** this year. We collaborate with top companies like TechCorp and InnovateX.",
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! 👋 I'm your College Info Bot. Ask me about **admission, campus, or scholarships**.",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // NEW: Typing/Loading state

  // Ref for auto-scrolling
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (input.trim() === "" || isTyping) return;

    const newUserMessage = { text: input.trim(), isUser: true };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput("");
    setIsTyping(true); // Start typing indicator

    setTimeout(() => {
      const response = generateBotResponse(newUserMessage.text);
      setIsTyping(false); // Stop typing indicator
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, isUser: false },
      ]);
    }, 1500); // 1.5 second loading delay for effect
  };

  const generateBotResponse = (text) => {
    const lowerText = text.toLowerCase();

    for (const qa of chatbotQA) {
      // Check against both full question and abbreviated question for a better match
      if (
        lowerText.includes(qa.fullQuestion.toLowerCase().slice(0, 10)) ||
        lowerText.includes(qa.question.toLowerCase().replace(/[?.]/g, "")) ||
        lowerText === qa.fullQuestion.toLowerCase().replace(/[?.]/g, "")
      ) {
        return qa.answer;
      }
    }

    if (lowerText.includes("hello") || lowerText.includes("hi")) {
      return "Hello there! 😊 I'm ready to answer questions about the college.";
    }

    const suggestedQuestions = chatbotQA.map((qa) => qa.fullQuestion);

    return `I'm sorry, I couldn't find a direct answer. Try one of these popular questions:\n\n- ${suggestedQuestions.join(
      "\n- "
    )}`;
  };

  const handleSuggestedQuestion = (question) => {
    if (isTyping) return;
    setInput(question);

    setTimeout(handleSend, 0);
  };

  const chatWidth = "w-88";
  const chatHeight = "h-[495px]";

  return (
    <>
      {/* Floating Toggle Button (Only visible when chat is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-8 z-50 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 focus:outline-none ring-4 ring-white ring-opacity-50"
          aria-expanded={isOpen}
          aria-label="Open chatbot"
        >
          <span className="material-symbols-outlined text-3xl bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-full">
            🗨️
          </span>
        </button>
      )}

      {/* Chat Window (Only visible when chat is open) */}
      {isOpen && (
        <div
          className={`fixed bottom-[70px] right-8 ${chatWidth} ${chatHeight} bg-white rounded-xl shadow-2xl overflow-hidden z-40 transform origin-bottom-right animate-in fade-in duration-300`}
        >
          <div className="bg-purple-600 text-white p-4 font-bold flex items-center justify-between shadow-md">
            {/* Dedicated Close Button in the header is the only close option */}
            <div className="text-2xl">ChatBOt</div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 p-1 rounded-full transition-colors"
              aria-label="Close chat window"
            >
              <span className="material-symbols-outlined text-2xl ">❌</span>
            </button>
          </div>
          {/* Chat History Area */}
          <div className="h-[calc(100%-150px)] py-4 px-4 space-y-4 overflow-y-auto pb-20">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl text-sm whitespace-pre-wrap ${
                    message.isUser
                      ? "bg-blue-500 text-white rounded-br-sm"
                      : "bg-gray-200 text-gray-800 rounded-tl-sm"
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: message.text.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                </div>
              </div>
            ))}

            {/* NEW: Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] p-3 rounded-xl text-sm bg-gray-200 text-gray-800 rounded-tl-sm animate-pulse">
                  <span className="text-lg">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 bg-white">
            <div className="mb-3 flex flex-wrap gap-2 justify-start">
              {chatbotQA.map((qa) => (
                <button
                  key={qa.question}
                  onClick={() => handleSuggestedQuestion(qa.fullQuestion)}
                  className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 rounded-full transition-colors font-medium"
                  disabled={isTyping}
                >
                  {qa.question}
                </button>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-grow p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="Type your question..."
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center disabled:opacity-50"
                disabled={isTyping || input.trim() === ""}
              >
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// =================================================================================
// HOME COMPONENT (REMAINS UNCHANGED)
// =================================================================================

const Home = () => {
  return (
    <Layout>
      <main>
        <section
          className="relative h-[calc(100vh-130px)] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMEn49u3T0QxfOscaFQPKMZIaOij7HyDtf5sJdWWp5tbzuiBcNwXs5HvuyqGo_60B4hqY7FITgAprzMoHjmhRV2uAhLrzjndoAmGuuFn3EKuAqSu3oYcN00oCu6w2jJaXA60kvq9bsmXly61tvl5gea-klbXAaPiIwa4DME4DuKGhBz6LfGh9P1adH520d4YB-63url2reZLz_lUlTOg8ZzeYIlC4xyZz9xGci1wNd3k1F1sHF09Uty9LGmdZZPF0kPM_SR3nvP2o')",
          }}
        >
          <div className="absolute inset-0 hero-gradient-overlay"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h1
              className="text-5xl md:text-7xl font-extrabold !leading-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                textShadow: "0 4px 15px rgba(0,0,0,0.5)",
              }}
            >
              Innovate. Educate. Elevate.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl font-light">
              Join a community of thinkers and creators at the forefront of
              engineering and technology.
            </p>
            <button className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/80 transform hover:scale-110 transition-all duration-300">
              Explore Our Campus
            </button>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                News & Events
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Discover the latest updates and upcoming events.
              </p>
            </div>

            <div className="max-w-md mx-auto mb-10 bg-gray-200 rounded-full p-1 flex justify-center space-x-1">
              {newsFilters.map((filter, index) => (
                <button
                  key={`news-filter-${index}`}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-full ${
                    filter.active ? filter.className : filter.className
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {newsData.map((newsItem, index) => (
                <div
                  key={`news-card-${index}`}
                  className="news-card bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200/80"
                >
                  <img
                    alt={newsItem.title}
                    className="w-full h-56 object-cover"
                    src={newsItem.imageUrl}
                  />
                  <div className="p-6">
                    <span
                      className={`text-xs font-semibold text-${newsItem.categoryColor}-600 bg-${newsItem.categoryColor}-100 px-3 py-1 rounded-full`}
                    >
                      {newsItem.category}
                    </span>
                    <h3
                      className={`mt-4 text-xl font-bold text-gray-800 hover:text-${newsItem.categoryColor}-600 transition-colors`}
                    >
                      {newsItem.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      {newsItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Notice Board
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                All important announcements and circulars.
              </p>

              <div className="mt-6 flex justify-center gap-2">
                {noticeFilters.map((filter, index) => (
                  <span
                    key={`notice-filter-${index}`}
                    className={`bg-${filter.color}-200 text-${filter.color}-800 text-xs font-medium px-3 py-1.5 rounded-full`}
                  >
                    {filter.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative max-w-2xl mx-auto pl-10">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300"></div>

              {noticeData.map((notice, index) => (
                <div key={`notice-item-${index}`} className="relative mb-8">
                  <div
                    className={`absolute -left-7 top-1 h-6 w-6 rounded-full bg-white border-2 border-${notice.borderColor} flex items-center justify-center`}
                  >
                    <div
                      className={`h-3 w-3 bg-${notice.borderColor} rounded-full`}
                    ></div>
                  </div>
                  <div
                    className={`bg-white p-5 rounded-lg shadow-md border-l-4 border-${notice.borderColor}`}
                  >
                    <p className="text-sm text-gray-500">{notice.date}</p>
                    <a
                      className={`font-semibold text-gray-800 hover:text-${
                        notice.borderColor.split("-")[0]
                      }-600 flex items-center gap-2 mt-1`}
                      href={notice.link}
                    >
                      {notice.title}{" "}
                      <span className="material-symbols-outlined text-red-500 text-lg">
                        picture_as_pdf
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Chatbot />
    </Layout>
  );
};

export default Home;
