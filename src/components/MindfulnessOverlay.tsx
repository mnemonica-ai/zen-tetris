'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface MindfulnessOverlayProps {
  playerName: string;
  exerciseIndex: number;
  onComplete: () => void;
}

export default function MindfulnessOverlay({
  playerName,
  exerciseIndex,
  onComplete
}: MindfulnessOverlayProps) {
  const { t, interpolate } = useLanguage();
  const [greeting, setGreeting] = useState('');
  const [instruction, setInstruction] = useState(t.mindfulness.preparing);
  const [breathState, setBreathState] = useState<string>('');
  const [progress, setProgress] = useState(0);

  const exercise = t.exercises[exerciseIndex % t.exercises.length];

  useEffect(() => {
    const greetingTemplate = t.mindfulness.greetings[Math.floor(Math.random() * t.mindfulness.greetings.length)];
    setGreeting(interpolate(greetingTemplate, { name: playerName }));
    setInstruction(t.mindfulness.preparing);
  }, [exerciseIndex, playerName, t, interpolate]);

  useEffect(() => {
    if (!exercise) return;

    let currentStep = 0;
    let currentCycle = 0;
    const totalSteps = exercise.steps.length * exercise.cycles;
    let completedSteps = 0;
    let timeoutId: NodeJS.Timeout;

    const runStep = () => {
      if (currentCycle >= exercise.cycles) {
        setInstruction(t.mindfulness.wellDone);
        setBreathState('');
        timeoutId = setTimeout(() => {
          onComplete();
        }, 1500);
        return;
      }

      const step = exercise.steps[currentStep];
      setInstruction(step.instruction);
      setBreathState(step.breath);

      completedSteps++;
      setProgress((completedSteps / totalSteps) * 100);

      timeoutId = setTimeout(() => {
        currentStep++;
        if (currentStep >= exercise.steps.length) {
          currentStep = 0;
          currentCycle++;
        }
        runStep();
      }, step.duration);
    };

    const startTimeout = setTimeout(() => {
      runStep();
    }, 1500);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [exercise, onComplete, t.mindfulness.wellDone]);

  if (!exercise) return null;

  return (
    <div className="fixed inset-0 bg-[#1a1510]/95 flex justify-center items-center z-50 backdrop-blur-[10px]">
      <div className="text-center max-w-[400px] p-10">
        <p className="text-base text-[#c9a86c] mb-5 italic">
          {greeting}
        </p>

        {/* Breath Circle */}
        <div
          className={`w-[150px] h-[150px] border-[3px] border-[#c9a86c] rounded-full mx-auto mb-8 transition-all duration-[4000ms] ease-in-out
            ${breathState === 'inhale' ? 'scale-[1.4] shadow-[0_0_40px_rgba(201,168,108,0.5)]' : ''}
            ${breathState === 'exhale' ? 'scale-100 shadow-[0_0_20px_rgba(201,168,108,0.2)]' : ''}
            ${breathState === 'hold' ? 'shadow-[0_0_60px_rgba(201,168,108,0.7)]' : ''}
            ${breathState === 'calm' ? 'shadow-[0_0_30px_rgba(201,168,108,0.3)]' : ''}
          `}
        />

        <h2 className="text-2xl font-light text-[#c9a86c] mb-5 tracking-wider">
          {exercise.title}
        </h2>

        <p className="text-xl text-[#d4c4a8] mb-4 min-h-[30px]">
          {instruction}
        </p>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#c9a86c]/20 rounded my-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#c9a86c] to-[#e8d5b0] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm text-[#6b5d4d] italic">
          {exercise.hint}
        </p>
      </div>
    </div>
  );
}
