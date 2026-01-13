import React, { useState } from 'react';
import { InvokeLLM } from '@/integrations/Core';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Gavel, Lightbulb, User, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function LegalExplainerPage() {
  const [question, setQuestion] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleExplain = async () => {
    if (!question.trim()) {
      setError('Please enter a question.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setExplanation('');

    try {
      const prompt = `
        You are an expert in Indian law, skilled at simplifying complex legal concepts for the average person.
        A user has asked the following question: "${question}"
        
        Please provide a clear, simple, and accurate explanation in plain English.
        Structure your response for easy readability. Use markdown for formatting (like headings, bold text, and lists).
        Start with a direct answer, then provide a more detailed explanation.
        If relevant, mention the key law or constitutional article.
        Do not provide legal advice. Frame your response as educational information only.
        Conclude with a disclaimer that this is not a substitute for professional legal advice.
      `;

      const response = await InvokeLLM({ prompt });
      setExplanation(response);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching the explanation. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <Gavel className="mx-auto h-12 w-12 text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold text-slate-900">AI Legal Explainer</h1>
        <p className="mt-2 text-lg text-slate-600">
          Simplify complex legal jargon. Ask a question and get a clear answer.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5 text-slate-500" />
            Your Legal Question
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., 'What is an FIR?' or 'Explain Article 21 of the Constitution.'"
            className="h-28"
          />
          <Button onClick={handleExplain} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating Explanation...
              </>
            ) : (
              'Explain It To Me'
            )}
          </Button>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </CardContent>
      </Card>

      {explanation && (
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-blue-600" />
              Simplified Explanation
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <ReactMarkdown>{explanation}</ReactMarkdown>
          </CardContent>
        </Card>
      )}

      {!explanation && !isLoading && (
        <Card className="border-dashed">
            <CardContent className="p-6 text-center">
                <Lightbulb className="mx-auto h-10 w-10 text-slate-400 mb-4" />
                <p className="text-slate-500">
                    The explanation will appear here once you submit a question.
                </p>
            </CardContent>
        </Card>
      )}
    </div>
  );
}