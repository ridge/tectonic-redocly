# Ridge Container Service
## Introduction
Ridge Container Service (RCS) lets you deploy a batch of containers across any Ridge location.

After you specify the container configuration, RCS creates the underlying infrastructure, spins up the desired number of containers with your specified image, and makes sure the containers are running.
RCS manages all the servers, networking and containers behind the scenes.

## Main Container Parameters
When creating a batch of containers, you specify:
  * Batch name
  * Container's image
  * The desired number of containers.
  * Container configuration - CPU, memory and instance storage size

## Elasticsearch Endpoint
RCS collects logs and ships them to the customer specified Elasticsearch server

## Container configuration
RCS allows you to configure containers:
  * Entry Point
  * Environment Variables
  * Arguments

## Container Registry Credentials
You specify the location of an image and, optionally, provide credentials for the registry.

  * URL of the Docker registry
  * Username
  * Password
  * Name for credentials

A separate, secure service stores the credentials and makes them available for use with multiple batch creations. Upon creation of a batch, you reference the credential name and do not need to enter the credentials.

## AWS Credentials for Containers
Containers that run in your batch may need access to AWS services. For example, the containers may need to write data to S3. These containers need AWS credentials for this purpose. Placing these credentials in the container image is not secure and configuring each container is complex and inconvenient.
Ridge stores AWS credentials for you, in a secure, reusable manner and uses them to generate temporary credentials for containers. The AWS SDK that you install in your container will automatically locate these credentials. The Ridge implementation makes the AWS credentials available in the same manner that AWS does.
### Basic Flow
The first step is to store AWS credentials on Ridge Cloud.
You will need to specify yhe following parameters:
  - AWS region
  - Access key ID
  - Access key secret
  - Name for these credentials
These credentials must allow for creating temporary AWS credentials (using AWS STS service API).

When you create a batch, you can choose to make **temporary** AWS credentials available to the containers. To do this you will need to specify:
  - The identifier of the above mentioned AWS credentials, referenced by name
  - The ARN of the role that you wish the containers to assume

A container from this batch can make use of the AWS SDK.
This SDK will search for the credentials on the metadata server (169.254.169.254).
The metadata server is part of the managed container service and Ridge Cloud will make **temporary** AWS credentials available on it for the specified role.
