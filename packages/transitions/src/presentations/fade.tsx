import {useMemo} from 'react';
import {AbsoluteFill} from 'remotion';
import type {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from '../types.js';

export type FadeProps = {
	enterStyle?: React.CSSProperties;
	exitStyle?: React.CSSProperties;
};

const FadePresentation: React.FC<
	TransitionPresentationComponentProps<FadeProps>
> = ({children, presentationDirection, presentationProgress, passedProps}) => {
	const isEntering = presentationDirection === 'entering';
	const style: React.CSSProperties = useMemo(() => {
		return {
			opacity: isEntering ? presentationProgress : 1,
			...(presentationDirection === 'entering'
				? passedProps.enterStyle
				: passedProps.exitStyle),
		};
	}, [
		isEntering,
		passedProps.enterStyle,
		passedProps.exitStyle,
		presentationDirection,
		presentationProgress,
	]);

	return <AbsoluteFill style={style}>{children}</AbsoluteFill>;
};

export const fade = (props?: FadeProps): TransitionPresentation<FadeProps> => {
	return {
		component: FadePresentation,
		props: props ?? {},
	};
};
