
import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <div className="aspect-[4/3] skeleton" />
      <div className="p-4">
        <div className="skeleton h-4 w-1/4 mb-2" />
        <div className="skeleton h-6 w-3/4 mb-3" />
        <div className="skeleton h-4 w-full mb-2" />
        <div className="skeleton h-4 w-2/3" />
      </div>
    </div>
  );
};

export const SkeletonText: React.FC<SkeletonProps> = ({ className = '' }) => {
  return <div className={`skeleton h-4 ${className}`} />;
};

export const SkeletonAvatar: React.FC<SkeletonProps> = ({ className = '' }) => {
  return <div className={`skeleton h-12 w-12 rounded-full ${className}`} />;
};

export const SkeletonButton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return <div className={`skeleton h-10 w-24 rounded-md ${className}`} />;
};
