---
title: "OpenSIPS monitoring with Netdata"
custom_edit_url: https://github.com/netdata/netdata/edit/master/collectors/charts.d.plugin/opensips/README.md
---



## Configuration

Edit the `charts.d/opensips.conf` configuration file using `edit-config` from the your agent's [config
directory](/docs/agent/step-by-step/step-04#find-your-netdataconf-file), which is typically at `/etc/netdata`.

```bash
cd /etc/netdata   # Replace this path with your Netdata config directory, if different
sudo ./edit-config charts.d/opensips.conf
```

