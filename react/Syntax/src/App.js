import {
  ClassComponent,
  FunctionComponent,
  Event,
  EventClass,
} from '../src/components/0919_component';
import '../src/App.css';

function App() {
  return (
    <>
      <ClassComponent age={10} />
      <FunctionComponent myclass={'kdt9'} />
      <Event /> <br />
      <EventClass />
    </>
  );
}

export default App;
