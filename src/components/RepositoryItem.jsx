import React from 'react'
import { getContrastYIQ } from '../util'

export default function RepositoryItem({ repository }) {
    return (
        <div className="card" key={repository.node.id}>
            <div className="card-body">
                <a href={repository.node.url} target={'_blank'}>{repository.node.nameWithOwner}</a>
                {repository.node.description ? (
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text text-muted">{repository.node.description}</p>
                        <span className="badge p-2" style={{ backgroundColor: repository.node.primaryLanguage.color, color: getContrastYIQ(repository.node.primaryLanguage.color) }}>{repository.node.primaryLanguage.name}</span>
                    </div>
                ) : (
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text text-muted">No description</p>
                        <span className="badge p-2" style={{ backgroundColor: repository.node.primaryLanguage.color }}>{repository.node.primaryLanguage.name}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
