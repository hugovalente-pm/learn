import React from 'react';

export const ReleaseVersion = '1.33.1';

export const ReleaseDate = 'February 14, 2022';

export const ReleaseNotes = [
	'Updated kickstart script to enable automatic installation via DEB or RPM packages wherever available.',
	'Save up to 70% bandwidth with the stream compression (still in testing)',
	'Improved eBPF monitoring compatibility by introducing eBPF CO-RE (Compile Once, Run Everywhere)',
	'Legacy version of the Agent-Cloud link (ACLK) is now deprecated',
];

export const News = [
	{
		title: <>Play pretend: The kickstart script now has a dry-run mode</>,
		href: '/docs/agent/packaging/installer/update#determine-which-installation-method-you-used',
		date: 'Mar 16, 2022',
		type: 'Doc',
		description: (
			<>
				If you have a system that you need to be extra careful on, we have good
				news for you: When installing or updating Netdata using the kickstart
				script, you can use the <code>--dry-run</code> option to get a report of
				what would happen on your node.
			</>
		),
	},
	{
		title: <>New version of the kickstart script</>,
		href: '/docs/agent/packaging/installer/methods/kickstart/',
		date: 'January 18, 2022',
		type: 'Doc',
		description: (
			<>
				Our new and improved one-line install process gets you started with
				Netdata even faster. Now more portable than ever, it eliminates the need
				to manually handle dependencies on a majority of Linux systems.
				Additionally, most users will see greatly reduced resource requirements
				for the install process compared to the old script.
			</>
		),
	},
	{
		title: <>Cloud charts 2.0</>,
		href: 'docs/cloud/visualize/interact-new-charts',
		date: 'November 30, 2021',
		type: 'Doc',
		description: (
			<>
				The improved charts in Netdata Cloud allow you to build the
				visualizations that meet your needs. You can customize the chart type
				and move around the chart to catch every metric.
			</>
		),
	},
	{
		title: <>Timezone selector is now available on Netdata Cloud</>,
		href: 'docs/dashboard/visualization-date-and-time-controls#timezone-selector',
		date: 'September 22, 2021',
		type: 'Doc',
		description: (
			<>
				With the timezone selector, you have the ability to change the timezone
				on Netdata Cloud.
			</>
		),
	},
	{
		title: <>Date and timeframe controls for visualizations on Netdata Cloud</>,
		href: 'docs/dashboard/visualization-date-and-time-controls',
		date: 'August 18, 2021',
		type: 'Doc',
		description: (
			<>
				Dashboards now allow you to visualize specific timeframes for any time
				interval either by using a set of quick time-ranges or selecting a
				custom time-range .
			</>
		),
	},
	{
		title: <>Kubernetes monitoring with Netdata: Overview and visualizations</>,
		href: '/guides/monitor/kubernetes-k8s-netdata',
		date: 'May 5, 2021',
		type: 'Guide',
		description: (
			<>
				Learn how to navigate Netdata's Kubernetes monitoring features for
				visualizing the health and performance of a Kubernetes cluster with
				per-second granulrity.
			</>
		),
	},
];
