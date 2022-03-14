import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
	<div>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<h1>Hello World</h1>
		<Nav />
	</div>
);

export default Home;
