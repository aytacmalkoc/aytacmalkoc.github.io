import React, { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'
import RepositoryItem from './RepositoryItem'

export default function Repositories() {

    const [repositories, setRepositories] = useState([])

    const fetchRepositories = async () => {

        const query = gql`{
            user(login: "aytacmalkoc") {
                pinnedItems(first: 6) {
                    edges {
                        node {
                            ... on Repository {
                                id
                                nameWithOwner
                                description
                                url
                                createdAt
                                updatedAt
                                openGraphImageUrl
                                primaryLanguage {
                                    id
                                    name
                                    color
                                }
                                languages(first: 5) {
                                    edges {
                                        node {
                                            id
                                            name
                                            color
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`

        request({
            url: import.meta.env.secrets.VITE_GITHUB_API_URL,
            document: query,
            requestHeaders: {
                Authorization: `Bearer ${import.meta.env.secrets.VITE_GITHUB_ACCESS_TOKEN}`
            }
        }).then(data => setRepositories(data.user.pinnedItems.edges))
    }

    useEffect(() => {
        const cache = JSON.parse(localStorage.getItem('cachedRepositories'))

        if (cache && cache.length > 0) {
            setRepositories(cache)
        }
        else {
            fetchRepositories()
            localStorage.setItem('cachedRepositories', JSON.stringify(repositories))
        }
    }, [])

    return (
        <div className="vea-portfolio vea-portfolio-2 sec-spacer scroll-mt-mbl" id="portfolio">
            <div className="container">
                <div className="sec-heading-4 text-left mb-60">
                    <h2 className="sec-title">Repositories</h2>
                </div>
                <div className="portfolio-works">
                    {repositories.map(repo => (
                        <RepositoryItem key={repo.node.id} repository={repo} />
                    ))}
                </div>
            </div>
        </div>
    )
}
