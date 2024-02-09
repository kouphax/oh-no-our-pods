import {useMachine} from "@xstate/react";
import {debugMachine} from "./machine/machine";
import * as React from "react";
import Fader from "./components/Fader";
import {
    Header,
    Interim,
    Main,
    NegativeButton,
    NeutralButton,
    Outcome,
    PositiveButton,
    Question,
    Snippet
} from "./components/Containers";
import {Screens} from "./Screens";


export function App() {
    const [snapshot, send ] = useMachine(debugMachine);


    const isInitialState = snapshot.matches('ready')
    const isEndState = snapshot.can({type: "reset"});
    const isInterimState = snapshot.can({type: "continue"}) && !isInitialState;
    const isDebugState = snapshot.can({type: "yes"})
    return <Main>
        <Header className="mb-10 text-4xl font-extrabold text-gray-700">
            Oh no!<br/>Our pods!<br/>They&apos;re broken!
        </Header>
        <Fader handle={snapshot.value}>
            {
                isInitialState && <>
                    <Question>Have you got <Snippet>BORKED</Snippet> pods?</Question>
                    <NeutralButton onClick={() => send({type: "continue"})}>
                        Let's fix them together using science &rarr;
                    </NeutralButton>
                </>
            }
            {
                isInterimState && <>
                    <Interim>{Screens[snapshot.value]}</Interim>
                    <PositiveButton onClick={() => send({type: "continue"})}>Continue &rarr;</PositiveButton>
                </>
            }
            {
                isEndState && <>
                    <Outcome>{Screens[snapshot.value]}</Outcome>
                    <NeutralButton onClick={() => send({type: 'reset'})}>Restart &larr;</NeutralButton>
                </>
            }
            {
                isDebugState && <>
                    { Screens[snapshot.value] }
                    <div className="flex flex-row space-x-4">
                        <PositiveButton onClick={() => send({type: "yes"})}>Yes</PositiveButton>
                        <NegativeButton onClick={() => send({type: "no"})}>No</NegativeButton>
                    </div>
                </>
            }
        </Fader>
    </Main>
}
