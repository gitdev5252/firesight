'use client';
import React from 'react';

type Props = {
  label: string;
  onClick: () => void;
};

const SessionTypeButton: React.FC<Props> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="m-4 px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow"
  >
    {label}
  </button>
);

export default SessionTypeButton; 