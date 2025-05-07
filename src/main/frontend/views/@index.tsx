
import {ViewConfig} from "@vaadin/hilla-file-router/types.js";
import {Card} from "antd";
import {Icon} from "@vaadin/react-components";

export const config: ViewConfig = {
    menu: {
        exclude: true
    },
};

export default function MainView() {
    return (
        <main className="p-m">
            <Card>
                <Icon slot="media" icon="lumo:photo" />
                <div>Lapland is the northern-most region of Finland and an active outdoor destination.</div>
            </Card>

            <Card>
                <Icon slot="media" icon="lumo:photo" />
                <div>Lapland is the northern-most region of Finland and an active outdoor destination.</div>
            </Card>
        </main>
    );
}