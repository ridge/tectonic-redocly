
               
 
# Ridge Quotas

## General
Ridge manages resources by setting quotas on usage.  Quotas prevent unforeseen usage spikes and thus serve to protect the community of Ridge Cloud users. 
As your utilization of Ridge Cloud increases, Ridge may raise your quota levels. If you are planning a significant increase in usage, you can proactively request an adjustment to your quota by opening a support request. 
Free trial account users:  Free trial account users cannot request a change to their quota.
 
## Checking Your Quota and Usage
At any time, you can view your account quota and your current usage of resources via the Ridge web console or via the Ridge API.


## The Web Console
At the top of the page, select your organization from the Organization dropdown list. Select Quota in the sidebar under Account. ![quotas-screen](quotas.png)

 
## The API
Use GET https://api.ridge.co/iam/v1alpha/orgs/<org>/quota to view quota and usage information for your organization.
You will see a response that looks like this:
```
{
    "limits": {
        "cpu_cores": 1000,
        "instance_storage": 1073741824000,
        "instances": 1000,
        "load_balancers": 20,
        "networks": 1000,
        "ram": 1073741824000
    },
    "usage": {
        "cpu_cores": 10,
        "instance_storage": 182536110080,
        "instances": 5,
        "load_balancers": 2,
        "networks": 2,
        "ram": 13958643712
    }
}
``` 
 
## Quotas and Resource Availability
Resource quotas are the maximum number of resources you are able to create of a specific resource type, assuming the availability of that resource. Your quotas is not a guarantee that the desired resources will be constantly available. 
When a resource is unavailable, or if the resource is not available in your chosen location, you will not be able to create new resources of that type even though your account may contain a positive balance. For example, if you have an available quota for load balancers, but in your selected location free external IPs are not available,  you will not be able to create a load balancer.
Note: For the purpose of usage calculation, master nodes of a Kubernetes cluster are considered instances.
## Understanding Quotas
An instance stands for either a Kubernetes node in the Ridge Kubernetes Service or a container in the Ridge Container Service.

### CPU Cores
When you create an instance you need to specify how many CPU cores it will need. The system will check if the current cpu_cores usage in addition to the cpu_cores of the requested instance exceeds your quota. If it exceeds the quota, the instance will not be created. You will receive an indication, either in the web console or in the API.
### Instance Storage
When you create an instance you need to specify the amount of storage that it will need. The system will check if the current instance storage usage in addition to the instance storage of the requested instance exceeds your quota. If it exceeds the quota, the instance will not be created. You will receive an indication, either in the web console or in the API.
### Instances
The number of instances that you can create is limited by your quota. If you try to create an instance that would result in usage exceeding your quota, the attempt will fail.
### Load Balancers
Load balancers are created under two circumstances:
You create a Kubernetes cluster. The load balancer is used to access the Kubernetes API.
You create a service of type loadBalancer in one of your Kubernetes clusters.
If the usage resulting from the load balancer creation is expected to exceed your quota, the load balancer will not be created. Note: If the creation of the load balancer for the Kubernetes API fails, the cluster will not be created.
### Networks
When you create a container batch, or a Kubernetes cluster, an isolated network is allocated. Therefore, batch or cluster creation increases usage of the network resource. You will not be able to create a new batch or cluster if usage has reached your quota.
### RAM
You must specify the amount of RAM needed when you create an instance. The system will check if your current RAM usage in addition to the RAM of the requested instance exceeds the quota. If it exceeds the quota, the instance will not be created. You will receive an indication, either in the web console or in the API.