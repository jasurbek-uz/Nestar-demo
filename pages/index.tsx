import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TopProperties from "@/libs/components/homepage/TopProperties";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { GET_PROPERTIES } from "@/apollo/user/query";
import { useQuery } from "@apollo/client";
import React from 'react';

const Home: NextPage = () => {
	const device = useDeviceDetect();
	const {
		loading: getPropertiesLoading,
		data: getPropertiesData,
		error: getPropertiesError,
		refetch: getPropertieRefetch,
	} = useQuery(GET_PROPERTIES, {
		fetchPolicy: "network-only",
		variables: {
			input: {
				page: 1,
				limit: 10,
				sort: "createdAt",
				direction: "DESC",
				search: {},
			},
		},
	});
	console.log("getPropertiesData =>", getPropertiesData);

	if (device === "mobile") {
		return <Stack>Mobile Hompage</Stack>;
	} else {
		return (
			<Stack className="home-page">
				<TrendProperties />
				<PopularProperties />
				<Advertisement />
				<TopProperties />
				<TopAgents />
			</Stack>
		);
	}
};

export default withLayoutMain(Home);
