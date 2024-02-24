import {OffthreadVideo, staticFile} from 'remotion';

const getVideoPropsForFrameRange = (): {
	src: string;
	startFrom: number;
	endAt: number;
} => {
	const frameOffset = window.remotion_initialFrame;
	if (frameOffset >= 0 && frameOffset < 90) {
		return {
			src: staticFile('segmented-video-example/big-buck-bunny-input-seg-1.mkv'),
			startFrom: 15,
			endAt: 105,
		};
	}

	if (frameOffset >= 90 && frameOffset < 180) {
		return {
			src: staticFile('segmented-video-example/big-buck-bunny-input-seg-2.mkv'),
			startFrom: 15,
			endAt: 105,
		};
	}

	return {
		src: staticFile('segmented-video-example/big-buck-bunny-input-seg-3.mkv'),
		startFrom: 15,
		endAt: 45,
	};
};

export const SegmentedVideoExample = (): JSX.Element => {
	const {src, startFrom, endAt} = getVideoPropsForFrameRange();
	return (
		<OffthreadVideo
			ignoreFrameRange
			src={src}
			startFrom={startFrom}
			endAt={endAt}
		/>
	);
};
