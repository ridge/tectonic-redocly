# Cluster VPN
VPN allows secure connection form cluster pods and service to/from an external network based on `WireGuard` (https://www.wireguard.com).
Ridge automatically takes care of VPN provisioning, so all you need to define is the `local network` and Ridge does the rest.

This document describes how to create and manage a VPN connection.

**Note:** some locations do not support this feature. you may find an indication of VPN support in the data center list page

## Creating a VPN
On a `ruuning` cluster choose VPN tab and press `Add VPN`, this will open the vpn pane.

![vpn](add-vpn.png)

Configure the following properties:
 - Name - the display name of the VPN
 - `WireGuard` Public Key - you can bring your own key. if left empty, one will be automatically generated
 - Local Networks - the CIDR of the network that you want to connect to the cluster

Press `Create` and Ridge will install and configure the VPN endpoint

![vpn-properties](vpn-properties.png)

## Configure the `WireGuard` client
- You will need to install `WireGuard`, you can find installation guide here https://www.wireguard.com/install/
- Copy or download the `WireGuead` configuration, you will need to save it under `/etc/wireguard/wg0.conf`
- Launch the VPN client by running `sudo wg-quick up wg0` and you are good to go

# Configure the VPN
You can always change a running VPN name or local network properties by editing the VPN, press the pencil on your VPN

![vpn-update](vpn-update.png)

# Deleting the VPN
On the update VPN page, select Properties-->Delete and confirm the deletion


