import FeedbackForm from "./components/FeedbackForm";
import Slideshow from "./components/Slideshow";
import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div className="p-6 space-y-10">
      <FeedbackForm />
      <Slideshow />
      <TodoApp />
    </div>
  );
}

