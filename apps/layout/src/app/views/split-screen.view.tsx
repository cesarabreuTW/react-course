import { LeftSideComponent } from '../components/split-screen/left-side.tsx';
import { RightSideComponent } from "../components/split-screen/right-side";
import { SplitScreenWithChildren } from "../components/split-screen/split-screen-children";

export const SplitScreenView = () => {
    // via props
    // return (
    //  <SplitScreen Left={LeftSideComponent} Right={RightSideComponent} />
    // )
    return (
        <SplitScreenWithChildren leftWidth={1} rightWidth={3}>
            <LeftSideComponent title="Left" />
            <RightSideComponent title={'Right'} />
        </SplitScreenWithChildren>
    )
}