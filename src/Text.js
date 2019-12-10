import React from 'react';

export const Rcp = () => (
    <>
        <p>
            We have begun to experience the effects of climate change, however, the extent to which these effects will ultimately progress is still uncertain. The main source of this uncertainty, particularly regarding the climate in the second half of this century, comes from the as yet unknown human response to climate change. In order to represent these different responses and their impact on climate change, the IPCC uses Representative Concentration Pathways.
            </p>
        <p>
            The scenarios range from the best case, RCP 2.6, to the worst case, RCP 8.5. The number of each pathway is the radiative forcing value at the end of the century in each scenario. Radiative forcing values measure the proportion of the sun’s energy absorbed into the earth instead of radiating back into space, and are dependent upon the concentration of greenhouse gasses in the atmosphere.
</p>
        <p>
            The scenario that becomes reality will be dependent upon our net greenhouse gas emissions over the coming decades. If we quickly stabilize and then lower our emissions we will end up in a lower radiative forcing value scenario, but if we continue to increase our emissions at the current rate, we will quickly end up in the worst case scenario.
</p>
        <p>
            Use the slider at the bottom of the page to adjust the scenario for climate change that is shown. Each graph shows the predicted value over the remainder of the century of an important measurement related to climate change. The shaded area represents the uncertainty associated with each prediction.
            After exploring the different scenarios for climate change read below about the green new deal, a proposal that would prevent the worst scenarios for climate change from occurring.
    </p>


    </>
);

export const Emissions = ({ peak }) => (
    <>
        <p>
            Greenhouse gas emissions are the most important control we have over climate change. The most important greenhouse gas is carbon dioxide, but other gasses such as methane or sulfur dioxide also contribute.  One important metric to pay attention to is when our emissions will reach their peak and begin declining. In the current scenario, emissions will peak around {peak}.
</p>
    </>
);

export const Concentration = ({ end }) => (
    <>
        <p>
            Greenhouse gas concentrations are affected by our cumulative emissions, and determine the level of radiative forcing. Higher concentrations of greenhouse gases result in higher temperatures and more severe impacts. In the current scenario, CO2 concentrations will be {end}ppm at the end of the century.
    </p>
    </>
);

export const SeaLevel = ({ end }) => (<>
    Increased temperatures result in shrinking ice sheets, raising the sea level. Rising sea levels threaten to inundate coastal cities, forcing people and industries near the ocean to move to higher ground. In the current scenario, sea levels will have risen by {end}m by the end of the century.
</>);

export const Temp = ({ end }) => (<>
    <p>
        Rising global tempratures result in heat waves that are more frequent and intense, crop failures, rising sea levels, more frequent and severe natural disasters, and ocean acidification. Temperature changes are measured against the pre-industrial average. One important threshold to pay attention to is 2 degrees of warming. At 2 degrees rising temperatures also lead to positive feedback cycles that will warm the earth even faster. In the current scenario, at the end of the century the average global temperature will be {end} degrees celcius higher than the pre-industrial average.
    </p>
</>);

export const GND = () => (<>
    <p>
        An action all of us in America can take to avoid the worst scenarios for climate change is to support the green new deal. The green new deal is a proposal to rapidly shift our energy infrastructure to carbon neutral solutions, through world war two scale investment in research and public works projects. The green new deal aims to transition our economy to 100% renewable energy by 2030. Because the time we have to begin reducing our emissions is so short if we want to guarantee the best scenario for global warming, a project this ambitious is our best hope.
</p>
    <p>
        Find out whether your elected officials support the green new deal, and make climate change part of your decision when voting.
</p>
    <p>
        Read more about the green new deal here: <a href='https://www.gp.org/green_new_deal'>https://www.gp.org/green_new_deal</a>
    </p>

</>);

export const References = () => (<>
<a href='https://link.springer.com/article/10.1007/s10584-011-0148-z'>https://link.springer.com/article/10.1007/s10584-011-0148-z</a><br/>
<a href='https://www.ipcc-data.org/guidelines/pages/glossary/glossary_r.html'>https://www.ipcc-data.org/guidelines/pages/glossary/glossary_r.html</a><br/>
<a href='https://skepticalscience.com/rcp.php?t=1'>https://skepticalscience.com/rcp.php?t=1</a><br/>
<a href='https://www.wri.org/blog/2018/08/why-positive-climate-feedbacks-are-so-bad'>https://www.wri.org/blog/2018/08/why-positive-climate-feedbacks-are-so-bad</a><br/>
<a href='https://www.ucsusa.org/climate/impacts'>https://www.ucsusa.org/climate/impacts</a><br/>
</>);
