import React from 'react';
import HeroSection from './HeroSection';
import Report from './Report';

export default function HowItWorks({ state }) {
    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <Report state={state.Report} />
    </React.Fragment>
}