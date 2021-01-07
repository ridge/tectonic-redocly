---
title: "RCS - Ridge Container Service - Overview"
slug: "functional-description"
hidden: false
createdAt: "2020-11-03T08:35:33.585Z"
updatedAt: "2021-01-06T09:25:41.943Z"
---
#WIP - WORK IN PROGRESS
# Introduction
Ridge Managed Container Service (RCS) lets you deploy a batch of identical containers. 
After you specify the container characteristics, Ridge creates the underlying infrastructure, spins up the desired number of containers with your specified docker image, and makes sure the containers are running. RCS manages all the servers, docker, and networking, behind the scenes.

## Creating a Batch of Containers
You can create a batch either using an API call, or using the Ridge console . In either case, you can specify a set of constraints for the Ridge Allocation Engine to use when selecting the best suited Data Center.

When creating a batch of containers, you can specify:
- The desired number of containers.
- The docker image.
- CPU, memory and ephemeral storage size, or alternately specify one of the container presets.
<!--* Features such as CPU clock rate.-->
- Conformity requirements for the data center where the batch is created.