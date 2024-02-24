import {OffthreadVideo, Sequence, staticFile} from 'remotion';

export const SegmentedVideoExample = (): JSX.Element => {
	return (
		<>
			<Sequence durationInFrames={90}>
				<OffthreadVideo
					src={staticFile(
						'segmented-video-example/big-buck-bunny-input-seg-1.mkv',
					)}
					startFrom={15}
					endAt={105}
				/>
			</Sequence>
			<Sequence from={90} durationInFrames={90}>
				<OffthreadVideo
					src={staticFile(
						'segmented-video-example/big-buck-bunny-input-seg-2.mkv',
					)}
					startFrom={15}
					endAt={105}
				/>
			</Sequence>
			<Sequence from={180} durationInFrames={30}>
				<OffthreadVideo
					src={staticFile(
						'segmented-video-example/big-buck-bunny-input-seg-3.mkv',
					)}
					startFrom={15}
					endAt={105}
				/>
			</Sequence>
		</>
	);
};
