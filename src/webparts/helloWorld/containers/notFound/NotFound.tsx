import React = require("react");

export default class NotFound extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        return (
            <div> Page was not found. </div>
        )
    }
}