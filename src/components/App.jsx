import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((entry) => {
          return (
            <Entry
              key={entry.id}
              id={entry.id}
              emoji={entry.emoji}
              name={entry.name}
              meaning={entry.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
