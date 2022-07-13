import React, { useState, useEffect } from 'react'
import { useStorage } from '@/hooks/useStorage'
import getColor from 'github-lang-colors'
import { Octokit } from 'octokit'

import RepositoryItem from './RepositoryItem'

export default function Repositories() {

    const [repositories, setRepositories] = useState([])
    const [cachedRepositories, setCachedRepositories] = useStorage('repositories')

    const fetchRepositories = async () => {

        if (cachedRepositories) {
            setRepositories(cachedRepositories)
        } else {
            let repos = []

            const octokit = new Octokit({
                auth: import.meta.env.VITE_GITHUB_ACCESS_TOKEN || '',
            })

            await octokit.rest.repos.listForUser({
                username: 'aytacmalkoc',
                sort: 'updated',
                per_page: 6,
                page: 1
            }).then((res) => {
                res.data.forEach(repo => {
                    if (!repo.fork) {
                        repos.push({
                            id: repo.id,
                            nameWithOwner: repo.full_name,
                            url: repo.html_url,
                            description: repo.description,
                            language: {
                                name: repo.language,
                                color: getColor(repo.language)
                            },
                            archived: repo.archived,
                        })
                    }
                })
            })

            setRepositories(repos)
            setCachedRepositories(repos)
        }
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    return (
        <div className="vea-portfolio vea-portfolio-2 sec-spacer scroll-mt-mbl" id="portfolio">
            <div className="container">
                <div className="sec-heading-4 text-left mb-60">
                    <h2 className="sec-title">Repositories</h2>
                </div>
                <div className="portfolio-works">
                    {repositories.map(repo => (
                        <RepositoryItem key={repo.id} repository={repo} />
                    ))}
                </div>
                <div className="col-12 text-center mt-60">
                    <a href="https://github.com/aytacmalkoc" className="btn btn-outline-dark" target={'_blank'}>see more on github</a>
                </div>
            </div>
        </div>
    )
}
