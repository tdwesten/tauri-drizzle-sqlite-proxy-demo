# Tauri + Drizzl ORM + SQLite

This is a simple example of how to use Tauri with Drizzl ORM and SQLite.

## Getting Started

Run the following commands to start the application:

```bash
npm install
```

```bash
npm run tauri dev
```

## Migration

After updating your models, you can run the following command to generate a new migration file in the `src-tauri/migrations` folder:

```bash
npm run migrate
```

By adding this to the tauri.config.js file the migrations folder in the app resoureces will be exposed to the tauri app.

```javascript
"resources": [
    "migrations/*"
]
```

## Database

You can find the sqlite database file in the `~/Library/Application Support/com.tauri.dev` folder or the equivalent for your OS. See the [Tauri documentation](https://tauri.app/v1/api/js/path/#appdir) for more information.
