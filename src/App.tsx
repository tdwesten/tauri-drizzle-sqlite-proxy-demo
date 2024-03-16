import { useEffect, useState } from "react";
import "./App.css";
import drizzleLogo from "./assets/drizzle.svg";
import reactLogo from "./assets/react.svg";

import { db } from "./db/database";
import * as schema from "./db/schema";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<{ id: number; name: string | null }[]>([]);

  async function addUser() {
    await db.insert(schema.users).values({ name });
    setName("");
    loadUsers();
  }

  useEffect(() => {
    async function init() {
      loadUsers();
      loadASingleUser();
    }
    init();
  }, []);

  const loadUsers = async () => {
    db.query.users
      .findMany()
      .execute()
      .then((results) => {
        console.log("🚀 ~ FindMany response from Drizzle:", results);
        setUsers(results);
      });
  };

  const loadASingleUser = async () => {
    db.query.users
      .findFirst()
      .execute()
      .then((result) => {
        console.log("🚀 ~ FindFirst response from Drizzle:", result);
      });
  };

  return (
    <div className="container">
      <h1>Welcome to tauri-drizzle-sqlite-proxy-demo!</h1>
      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://orm.drizzle.team" target="_blank">
          <img src={drizzleLogo} className="logo drizzle" alt="Drizzle logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, React and Drizzle logos to learn more.</p>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          addUser();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          value={name}
          placeholder="Enter a name..."
        />
        <button type="submit">Add name to the db</button>
      </form>
      List of users form the sqlite database:
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
