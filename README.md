## DocParser

## Problem Statement
- Able to store and manipulate individual faculty details.
- Allows admin/user to add new paper with following details
- Allows user/admin to generate reports based on those field(Using Azure Custom Vision)
- Allows admin/user to edit the inserted records

- This solution makes use of PostgreSQL for reliable database management, Microsoft Entra ID for secure authentication, Azure Cosmos DB for dynamic front-end development, and OpenAI's GPT-4 for intelligent data handling and conversational AI.
- InnoTutor offers a smooth learning experience from information retrieval to knowledge assessment because it was designed with scalability and user experience in mind.
  
## Tech Stack
- Microsoft Entra ID(Azure AD)
- Next.js
- Typescript
- Azure AI Search
- Chakra UI
- Azure AI Document Intellignce
- Azure Cosmos DB

![Overall.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/overall.png)

### :zap: Content Upload and Extraction Flow 

- Through a client interface, users can submit files or text to InnoTutor, and the data is then sent to the endpoints. 
- After processing (text is taken out of files using Azure AI Document Intelligence), this data is saved in Azure Cosmos DB so that it can be used in other platforms.

### UML Diagram

![Uploading.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/uploading.png)

### :scroll: Challenges we ran into

- Integration of GPT-4 & Azure Services: Integrating the latest AI advancements with Azure services was no easy task. It required meticulous 
 planning and adaptation to ensure seamless harmony. We overcame this hurdle through iterative testing, and leveraging the extensive 
 documentation provided by both OpenAI and Microsoft Azure.

- Data Processing and Storage Optimization: Processing and storing large amounts of data can be challenging, but with Azure AI Document 
 Intelligence, it's a breeze! Speed and scalability are no longer an issue. We optimized our code, used parallel processing, and fine-tuned 
 Azure Cosmos DB. The result? Improved performance and responsiveness!

- Synchronization of Search Service and Database: We tackled the challenge of keeping search results current by implementing real-time 
  synchronization mechanisms. Now our search service always displays the latest information from the database!

### :file_folder: RAG Prompting Flow

- InnoTutor's Retrieval-Augmented Generation (RAG) prompting flow begins when a user provides a prompt via the client interface, which triggers a request to the '/api/chat' endpoint. 
- The system then extracts relevant information from the Azure Cosmos DB database to give context for the generative language model (LLM), which uses the data to generate personalised educational content.
- Ultimately, the response is broadcast back to the client, giving the user an answer enhanced by the data that was retrieved, guaranteeing a more precise and contextualised interaction.
![Prompting.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/prompting.png)


### :outbox_tray: Inside The Box(Azure AI Search)

- We index our database's `users` and `notebooks` collections using Azure AI search.
- As a result, users are able to search the data through the client quickly and effectively.
- The search results are constantly current since the search service and database are automatically synchronised.

![Search.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/search.png)

### :card_index_dividers: Continuous Integration and Deployment

- GitHub Actions is used to construct the CI/CD pipeline for InnoTutor. With each push or pull request to the repository, the code integration, testing, and deployment processes are automated.
- The application is deployed to Azure Static Web Apps after the automatic procedures have confirmed the modifications, guaranteeing continuous delivery of the most recent platform version.

![Continuous Integration and Deployment Workflow with Next.js, GitHub, and Azure.png](https://github.com/akashpanda122/innotutor/blob/main/public/architecture/deployment.png)

### Try it out
- https://azure.chatedu.io/



### :scroll: Licence
InnoTutor is available under the MIT license. See the LICENSE file for more info.
