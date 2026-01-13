import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Gavel, GraduationCap, Landmark, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Gavel,
    title: 'AI Legal Explainer',
    description: 'Ask any legal question in simple language and get clear, AI-powered answers instantly.',
    href: 'LegalExplainer',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Landmark,
    title: 'Explore the Constitution',
    description: 'Browse, search, and understand the articles of the Indian Constitution with simplified explanations.',
    href: 'Constitution',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: GraduationCap,
    title: 'Interactive Courses',
    description: 'Learn about your fundamental rights and the legal system through easy-to-follow courses.',
    href: 'Courses',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: MessageSquare,
    title: 'Legal Consultation',
    description: 'Submit your specific legal queries and get guidance from qualified professionals.',
    href: 'Consultation',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center bg-white p-8 rounded-xl shadow-sm">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-lg">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Welcome to Jan Adhikar
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-8">
          Your guide to understanding Indian law. Empowering every citizen with accessible, multilingual, and simplified legal knowledge.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to={createPageUrl('LegalExplainer')}>
              Ask a Legal Question <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to={createPageUrl('Courses')}>
              Start a Course
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div>
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Explore Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{feature.description}</CardDescription>
                <Button variant="link" asChild className="p-0 text-blue-600">
                  <Link to={createPageUrl(feature.href)}>
                    Go to {feature.title} <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}