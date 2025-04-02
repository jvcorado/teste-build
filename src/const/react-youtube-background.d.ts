declare module 'react-youtube-background' {
    import * as React from 'react';

    interface YouTubeBackgroundProps {
        videoId: string;
        overlay?: string;
        className?: string;
        children?: React.ReactNode;
    }

    const YouTubeBackground: React.FC<YouTubeBackgroundProps>;

    export default YouTubeBackground;
}
