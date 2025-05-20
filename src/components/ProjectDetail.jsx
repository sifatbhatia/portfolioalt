import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate(-1)} className="px-6 py-3 bg-black text-white rounded-lg">Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">{project.title}</h1>
      <div className="w-full max-w-3xl mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl object-cover aspect-video bg-gray-100"
        />
      </div>
      <div className="mb-2 text-center text-gray-500">built with {project.technologies.join(', ')}</div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 inline-block px-4 py-2 bg-black text-white rounded shadow hover:bg-gray-800 transition"
      >
        Visit
      </a>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About the project</h2>
      <p className="text-xl text-center mb-8">{project.detailedDescription}</p>
      <div className="w-full max-w-3xl mb-8">
        <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Challenges & Solutions</h3>
        <ul className="list-disc list-inside text-lg text-gray-700">
          {project.challenges.map((challenge, idx) => (
            <li key={idx}>{challenge}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="w-full max-w-3xl py-4 bg-black text-white rounded shadow text-lg font-semibold hover:bg-gray-800 transition"
      >
        &lt; Back
      </button>
    </div>
  );
};

export default ProjectDetail; 