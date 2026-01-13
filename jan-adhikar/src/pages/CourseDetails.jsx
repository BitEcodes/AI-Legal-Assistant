import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Course as CourseModel } from "@/Entities/Course.jsx";

export default function CourseDetails() {
  const [params] = useSearchParams();
  const id = params.get("id");
  const [course, setCourse] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    CourseModel.getById(id).then(setCourse);
  }, [id]);

  if (!course) return <p className="text-center mt-20">Loading...</p>;

  const videoUrl = course.youtube_url?.replace("watch?v=", "embed/");

  const chooseAnswer = (qIndex, opt) => {
    setAnswers({ ...answers, [qIndex]: opt });
  };

  const submitQuiz = () => setSubmitted(true);

  return (
    <div className="max-w-5xl mx-auto mt-10 space-y-8">

      <h1 className="text-3xl font-bold">{course.title}</h1>

      {course.youtube_url && (
        <iframe
          className="w-full h-80 rounded-lg shadow"
          src={videoUrl}
          allowFullScreen
        ></iframe>
      )}

      <p className="text-lg text-gray-700">{course.description}</p>

      <h2 className="text-2xl font-semibold mt-10">Quiz</h2>

      {course.quizzes?.map((q, i) => (
        <div key={i} className="p-4 border rounded-lg mb-4 bg-white shadow-sm">
          <p className="font-medium">{q.question}</p>

          {q.options.map((opt, j) => {
            const selected = answers[i] === opt;
            const correct = submitted && opt === q.answer;
            const wrong = submitted && selected && opt !== q.answer;

            return (
              <button
                key={j}
                onClick={() => chooseAnswer(i, opt)}
                disabled={submitted}
                className={`block w-full text-left px-4 py-2 mt-2 rounded border
                  ${selected ? "bg-blue-200 border-blue-500" : "bg-gray-100"}
                  ${correct ? "bg-green-200 border-green-600" : ""}
                  ${wrong ? "bg-red-200 border-red-600" : ""}
                `}
              >
                {opt}
              </button>
            );
          })}

          {submitted && (
            <p className="mt-2 text-green-700">
              ✓ Correct Answer: <b>{q.answer}</b>
            </p>
          )}
        </div>
      ))}

      {!submitted && (
        <button
          onClick={submitQuiz}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Submit Quiz
        </button>
      )}
    </div>
  );
}
