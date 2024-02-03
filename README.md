# InnoTutor

## Table of Contents

- [Overview](#overview)
- [Technical Architecture](#technical-architecture)
    - [Content Upload and Extraction Flow](#content-upload-and-extraction-flow)
    - [RAG Prompting Flow](#rag-prompting-flow)
    - [Continuous Integration and Deployment](#continuous-integration-and-deployment)
- [Directory Structure](#directory-structure)
  - [/pages](#pages)
  - [/app](#app)
  - [/components](#components)
  - [/hooks](#hooks)
  - [/search](#search)
  - [/prompts](#prompts)
  - [/types](#types)
  - [/cosmosPostgres](#cosmospostgres)
  - [/services](#services)
  - [/documentIntelligence](#documentintelligence)
- [Running the Application](#running-the-app)

## Overview

InnoTutor is not just an educational tool; it's a revolution in learning. By harnessing the power of Azure AI, including GPT-4 and Azure's diverse databases and services, we've transcended traditional learning methods. Our platform transforms any text or file into an immersive tutoring experience, offering personalized study guides, multiple-choice tests, long answer formats, and context-driven sessions. This is education reimagined.

## Technical Architecture

This system leverages the power of React and Next.js for a dynamic front-end, Azure AD for secure authentication, PostgreSQL for robust database management, and Azure Cosmos DB alongside OpenAI's GPT-4 for intelligent data handling and conversational AI. Designed with scalability and user experience in mind, ChatEDU provides a seamless educational journey from information retrieval to knowledge testing.

![Overall.png](https://raw.githubusercontent.com/chat-edu/chat-edu/main/public/architecture/overall.png)

### Content Upload and Extraction Flow

The uploading flow in InnoTutor allows users to add files or text via a client interface, which then posts the data to the endpoints. This data is processed — text is extracted from files using Azure AI Document Intelligence — and subsequently stored in Azure Cosmos DB for further use within the platform.

![Uploading.png](https://raw.githubusercontent.com/chat-edu/chat-edu/main/public/architecture/uploading.png)

### RAG Prompting Flow

The Retrieval-Augmented Generation (RAG) prompting flow in InnoTutor begins when a user submits a prompt through the client interface, which sends a request to the `/api/chat` endpoint. The system then retrieves relevant information from the Azure Cosmos DB database to provide context to the generative language model (LLM), which uses this data to create personalized educational material. Finally, the response is streamed back to the client, providing the user with an answer that is augmented by the retrieved data, ensuring a more accurate and contextual interaction.

![Prompting.png](https://raw.githubusercontent.com/chat-edu/chat-edu/main/public/architecture/prompting.png)


### Azure AI Search

We utilize Azure AI search to index the `users` and `notebooks` collections of our database. This then allows users to perform fast and efficient searches on the data through the client. The search service is automatically synced with the database, ensuring that the search results are always up-to-date.

![Search.png](https://raw.githubusercontent.com/chat-edu/chat-edu/main/public/architecture/search.png)

### Continuous Integration and Deployment

The CI/CD pipeline for InnoTutor is implemented using GitHub Actions, which automates the process of code integration, testing, and deployment upon every push or pull request to the repository. Once the automated workflows verify the changes, the application is deployed to Azure Static Web Apps, ensuring continuous delivery of the latest version of the platform.

![Continuous Integration and Deployment Workflow with Next.js, GitHub, and Azure.png](https://raw.githubusercontent.com/chat-edu/chat-edu/main/public/architecture/deployment.png)
