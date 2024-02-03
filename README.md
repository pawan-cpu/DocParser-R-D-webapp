# InnoTutor

## :fleur_de_lis: Drumroll, here...comes InnoTutor

- InnoTutor is a revolution in learning, not merely a teaching tool.
- We've gone beyond conventional learning techniques by utilising the capabilities of Azure AI, including GPT-4 and Azure's varied datasets and services.
- With the help of our platform, you can turn any text or file into an engaging tutoring session that includes context-driven learning, multiple-choice exams, extended answer formats, and personalised study guides.
- This is ~~education reimagined~~ new take on education.

## Technical Architecture

- This system leverages the power of React and Next.js for a dynamic front-end, Azure AD for secure authentication, PostgreSQL for robust database management, and Azure Cosmos DB alongside OpenAI's GPT-4 for intelligent data handling and conversational AI.
- Designed with scalability and user experience in mind, ChatEDU provides a seamless educational journey from information retrieval to knowledge testing.

![Overall.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/overall.png)

### Content Upload and Extraction Flow

- The uploading flow in InnoTutor allows users to add files or text via a client interface, which then posts the data to the endpoints. 
- This data is processed — text is extracted from files using Azure AI Document Intelligence — and subsequently stored in Azure Cosmos DB for further use within the platform.

![Uploading.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/uploading.png)

### RAG Prompting Flow

-The Retrieval-Augmented Generation (RAG) prompting flow in InnoTutor begins when a user submits a prompt through the client interface, which sends a request to the `/api/chat` endpoint. 
- The system then retrieves relevant information from the Azure Cosmos DB database to provide context to the generative language model (LLM), which uses this data to create personalized educational material.
- Finally, the response is streamed back to the client, providing the user with an answer that is augmented by the retrieved data, ensuring a more accurate and contextual interaction.

![Prompting.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/prompting.png)


### :outbox_tray: Inside The Box(Azure AI Search)

- We utilize Azure AI search to index the `users` and `notebooks` collections of our database.
- This then allows users to perform fast and efficient searches on the data through the client.
- The search service is automatically synced with the database, ensuring that the search results are always up-to-date.

![Search.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/search.png)

### Continuous Integration and Deployment

- The CI/CD pipeline for InnoTutor is implemented using GitHub Actions, which automates the process of code integration, testing, and deployment upon every push or pull request to the repository.
- Once the automated workflows verify the changes, the application is deployed to Azure Static Web Apps, ensuring continuous delivery of the latest version of the platform.

![Continuous Integration and Deployment Workflow with Next.js, GitHub, and Azure.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/deployment.png)
