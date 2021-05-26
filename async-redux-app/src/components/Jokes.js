import React from "react";
import { connect } from "react-redux";

import { getRandomJoke } from "../actions/actions";

const Jokes = ({ joke, fetching, error, getRandomJoke }) => {
	if (error) {
		return <div> error</div>;
	}
	if (fetching) {
		return <div> fetching</div>;
	}
	return (
		<div>
			{" "}
			joke{" "}
			<button
				onClick={() => {
					getRandomJoke();
				}}
			>
				{" "}
				fetch joke
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		joke: state.joke,
		fetching: state.fetching,
		error: state.error,
	};
};

export default connect(mapStateToProps, { getRandomJoke })(Jokes);
