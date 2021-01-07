---
title: "Getting Started with the API"
slug: "getting-started-1"
hidden: false
createdAt: "2020-12-03T14:42:48.952Z"
updatedAt: "2020-12-28T15:27:30.894Z"
---
# Introduction
Welcome to the Ridge developer API guide.  This guide will explain the core concepts necessary for using Ridge resources
[block:callout]
{
  "type": "info",
  "title": "See Also:",
  "body": "[RKS - Ridge Kubernetes Service - Overview](ref:rks-overview)"
}
[/block]
# Ridge API
The Ridge API is a RESTFUL API that uses JSON encoding. All API requests must include a token in the header for authentication. The token is obtained using the Ridge API, and placed in the HTTP Authorization request header:
Authorization: Bearer <Token>

# API Keys
Once a member, the user can create API keys which are required for API access. An API key contains a token that is used in the HTTP Authorization request header.
[block:code]
{
  "codes": [
    {
      "code": "Authorization: Bearer <Token>",
      "language": "json",
      "name": " "
    }
  ]
}
[/block]
# API Variables - Quantities and Qualities
In some cases, the input or output fields for an API function are defined as variables. In these cases, the definition of the variable appears at the bottom of the page that describes the function. (This is, as opposed to the description of non-variable parameters which appear inline.)

# Core Concepts
In this section, we describe the core concepts you should be familiar with when working with the Ridge Cloud.

## What is Ridge?
Ridge offers cloud services based on data centers that are located across the globe. Ridge does not own any of these data centers. They are owned by local service providers. You can choose to deploy your services in any of these locations. Ridge offers managed Kubernetes and container services in all the locations.

## Resource Management
Ridge resources are managed by using a hierarchical structure.  Ridge provides Orgs and Projects for grouping and managing resources. Ridge provides Groups for conveniently managing access to resources. 

## Orgs
Organizations (Orgs) are the top level of the hierarchy and provide Ridge customers with full visibility of all consumed resources and the ability to segment and manage resources including user management and account administration.  Each customer is associated with at least one Org.  

## Projects
Projects are part of an Organization.  Projects provide the ability to logically segment resources within an Org.  Projects contain infrastructure resources, (Compute, Network and Storage) that are consumed using Ridge Services.  User and/or groups may be granted roles in each project.