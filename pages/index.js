import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
	<div>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Nav />
		<h1 style={{ color: "blue", textAlign: "center" }}>Hello World</h1>
	</div>
);

export default Home;
