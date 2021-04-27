# Ridge Container Service
## Introduction
[Ridge Container Service](https://www.ridge.co/container) (RCS) lets you deploy a batch of identical containers.
After you specify the container characteristics, Ridge creates the underlying infrastructure, spins up the desired number of containers with your specified Docker image, and makes sure the containers are running. RCS manages all the servers, Docker, and networking, behind the scenes.

## Creating a Batch of Containers
You can create a batch either using an API call or using the Ridge console. In either case, you can specify a set of constraints for the Ridge Allocation Engine to use when selecting the best suited Data Center.

## Main Container Parameters
When creating a batch of containers, you specify:
  * Batch name
  * Container's Docker Image
  * Desired Location
  * The desired number of containers.
  * CPU, memory and instance storage size

## Elasticsearch Endpoint
RCS gathers the logs and writes them to the customer specified Elasticsearch server you specify.


## Docker Parameters
RCS allows you to indicate parameters for Ridge to use when creating Containers. These are the standard parameters that would be included in Docker CLI commands:
  * Entry Point
  * Environment Variables
  * Arguments

## Docker Registry Credentials
You specify the location of a Docker image for the containers, and, optionally, provide credentials for the Docker registry.

  * URL of the Docker registry
  * Username
  * Password
  * Name for credentials

A separate, secure service stores the credentials and makes them available for use with multiple batch creations. Upon creation of a batch, you reference the credential name and do not need to enter the credentials.

## AWS Credentials for Containers
Containers that run in your batch may need access to AWS services. For example, the containers may need to write data to S3. These containers need AWS credentials for this purpose. Placing these credentials in the container image is not secure and configuring each container is complex and inconvenient.
Ridge stores AWS credentials for you, in a secure, reusable manner and uses them to generate temporary credentials for containers. The AWS SDK that you install in your container will automatically locate these credentials. The Ridge implementation makes the AWS credentials available in the same manner that AWS does.
### Basic Flow
The first step is to store AWS credentials on Ridge Cloud.  See [External Credentials API](https://dev.ridge.co/api/keying/overview/).
You will need to specify yhe following parameters:
  - AWS region
  - Access key ID
  - Access key secret
  - Name for these credentials
These credentials must allow for creating temporary AWS credentials (using AWS STS service API).

When you create a batch, you can choose to make **temporary** AWS credentials available to the containers. To do this you will beed to specify:
  - The identifier of the above mentioned AWS credentials, referenced by name
  - The ARN of the role that you wish the containers to assume
  
A container from this batch can make use of the AWS SDK. This SDK will search for the credentials on the metadata server (169.254.169.254). The metadata server is part of the managed container service and Ridge Cloud will make **temporary** AWS credentials available on it for the specified role.

## Batch Monitoring and Auto-healing
The batch of containers will be constantly monitored by Ridge to ensure they are running, as required by the application (unless an application runs and exits by design).
You can delete a specific container or an entire batch. However, if a container terminates unintentionally (for example, if the server fails), the system will automatically bring one up in its place.
The system is persistent in its attempt to run the desired number of containers. Even if there is a temporary shortage in resources, Ridge continues to retry to start the containers.
