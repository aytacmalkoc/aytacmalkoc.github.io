import React, { useEffect, useState } from 'react';
import contrast from 'contrast';

export default function RepositoryItem({ repository }) {
  const [languageColor, setLanguageColor] = useState('');

  useEffect(() => {
    const color = contrast(repository.language.color) == 'light' ? '#000000' : '#ffffff';
    setLanguageColor(color);
  }, []);

  return (
    <div className="card" key={repository.id}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <a href={repository.url} target={'_blank'}>
            {repository.nameWithOwner}
          </a>
          {repository.archived && (
            <span
              className="badge p-2"
              style={{
                backgroundColor: 'rgba(174, 124, 20)',
                backgroundImage:
                  'linear-gradient(rgba(174, 124, 20, 0.15), rgba(174, 124, 20, 0.15))',
                marginLeft: 5
              }}
            >
              Archived
            </span>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text text-muted">
            <em>{repository.description ? repository.description : 'No description'}</em>
          </p>
          <span
            className="badge p-2"
            style={{ backgroundColor: repository.language.color, color: languageColor }}
          >
            {repository.language.name}
          </span>
        </div>
      </div>
    </div>
  );
}
