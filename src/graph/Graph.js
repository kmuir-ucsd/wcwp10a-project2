import React, { useMemo, useState } from 'react';
import { VictoryTheme, VictoryArea, VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import useDebounce from '../debounce';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const interpolation = "catmullRom";

export const interpolateValue = (low, high, percent) => (
    low + ((high - low) * percent)
);

const interpolateSet = (low, high, percent) => {
    const zip = low.map((e, i) => [e, high[i]]);
    return zip.map(([a, b]) => {
        let obj = {}
        for (const key of Object.keys(a)) {
            obj[key] = interpolateValue(a[key], b[key], percent);
        }
        return obj;
    });
};

const interpolateData = (data, position) => {
    let min = Infinity;
    let max = -Infinity;
    let minData = null;
    let maxData = null;
    data.forEach(({ index, value }) => {
        if (index === position) return value;
        if (index < min && index > position) {
            min = index;
            minData = value;
        }
        if (index > max && index < position) {
            max = index;
            maxData = value;
        }
    });
    if (!minData) return maxData;
    if (!maxData) return minData;
    return interpolateSet(maxData, minData, (position - max) / (min - max));
}

export const Graph = ({ source, index }) => {

    const data = source.data;
    const name = source.name;

    const debouncedIndex = useDebounce(index, 1000 / 30);

    const maxY = useMemo(
        () => {
            let max = -Infinity;
            data.forEach(({ value }) => value.forEach(({ y, w }) => { if (y > max) max = y + (w / 2) }));
            return max;
        },
        [data]
    );

    const minY = useMemo(
        () => {
            let min = Infinity;
            data.forEach(({ value }) => value.forEach(({ y, w }) => { if (y < min) min = y - (w / 2) }));
            return min;
        },
        [data]
    );

    const padding = (maxY - minY) / 10

    const interpolatedData = useMemo(
        () => interpolateData(data, debouncedIndex),
        [data, debouncedIndex]
    );

    const processedData = useMemo(
        () => interpolatedData.map(x => ({
            top: x.y + (x.w / 2),
            bottom: x.y - (x.w / 2),
            ...x,
        })),
        [interpolatedData]
    );

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <VictoryChart
                    maxDomain={{ y: maxY + padding }}
                    minDomain={{ y: minY - padding }}
                    theme={VictoryTheme.grayscale}
                    padding={{top:10, bottom: 10, left: 50, right: 50}}
                >
                    <VictoryAxis
                        tickFormat={x => `${x}`}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={x => `${x}`}
                    />
                    <VictoryArea
                        data={processedData}
                        x="x"
                        y="bottom"
                        y0="top"
                        style={{
                            data: { fill: "#0040ff", opacity: 0.5 },
                        }}
                        interpolation={interpolation}
                    />
                    <VictoryLine
                        data={processedData}
                        style={{
                            data: { stroke: "#0040ff" },
                        }}
                        interpolation={interpolation}
                    />
                </VictoryChart>
            </CardContent>
        </Card>
    )
}
